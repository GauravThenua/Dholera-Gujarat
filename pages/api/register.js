// /pages/api/register.js

import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required.',
      });
    }

    const filePath = path.join(process.cwd(), 'data', 'users.txt');

    try {
      // Ensure the data folder exists
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // Read existing users
      const fileData = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf-8') : '';
      const users = fileData
        .split('\n')
        .filter(Boolean)
        .map(line => {
          const [existingName, existingEmail] = line.split(',');
          return existingEmail.trim();
        });

      // Check if email already exists
      if (users.includes(email)) {
        return res.status(409).json({
          success: false,
          message: 'Email already registered.',
        });
      }

      // Append new user
      const newUserLine = `${name},${email},${phone},${password}\n`;
      fs.appendFileSync(filePath, newUserLine);

      return res.status(201).json({
        success: true,
        message: 'Registration successful!',
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Server error. Please try again later.',
      });
    }
  } else {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed.',
    });
  }
}
