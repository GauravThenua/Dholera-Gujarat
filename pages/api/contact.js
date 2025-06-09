// pages/api/contact.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  const nameRegex = /^[a-zA-Z\s]{3,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  if (!nameRegex.test(name)) {
    return res.status(400).json({ message: 'Invalid name. Must contain only letters and be at least 3 characters long.' });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format.' });
  }

  if (!message || message.length < 5) {
    return res.status(400).json({ message: 'Message should be at least 5 characters long.' });
  }

  // Construct the message to write
const logMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\nDate: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}\n\n`;

  // Define the file path
  const filePath = path.join(process.cwd(), 'data', 'contact-submissions.txt');


  try {
    // Append the message to the file
    fs.appendFileSync(filePath, logMessage, 'utf8');
    return res.status(200).json({ message: 'Your message has been sent successfully! Our team will get back to you shortly.' });
  } catch (error) {
    console.error('Error writing to file:', error);
    return res.status(500).json({ message: 'Internal server error. Could not save your message.' });
  }
}
