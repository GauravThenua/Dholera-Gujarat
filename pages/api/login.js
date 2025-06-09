// /pages/api/login.js

import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Path to your users file
    const filePath = path.join(process.cwd(), 'data', 'users.txt');

    try {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      const users = fileData
        .split('\n')
        .filter(Boolean)
        .map(line => {
          const [name, storedEmail, phone, storedPassword] = line.split(',');
          return { name, email: storedEmail, phone, password: storedPassword };
        });

      const matchedUser = users.find(
        user => user.email === email && user.password === password
      );

      if (matchedUser) {
        return res.status(200).json({
          success: true,
          message: 'Login successful!',
          name: matchedUser.name,
        });
      } else {
        return res.status(401).json({
          success: false,
          message: 'Invalid email or password.',
        });
      }
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
