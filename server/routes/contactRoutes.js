const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const { getDbStatus } = require('../config/db');

// In-memory fallback if MongoDB connection is pending or offline
const memoryMessages = [];

// POST /api/contact - Submit new message
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Server-side validation
    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, error: 'Name is required' });
    }
    if (!email || !email.trim()) {
      return res.status(400).json({ success: false, error: 'Email is required' });
    }
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email.trim().toLowerCase())) {
      return res.status(400).json({ success: false, error: 'Invalid email address' });
    }
    if (!message || !message.trim()) {
      return res.status(400).json({ success: false, error: 'Message content is required' });
    }

    const newRecord = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : '',
      message: message.trim(),
      createdAt: new Date(),
    };

    if (getDbStatus()) {
      const saved = await Message.create(newRecord);
      return res.status(201).json({
        success: true,
        message: 'Your message has been received and stored in MongoDB! Thank you for reaching out.',
        data: saved,
      });
    } else {
      // Memory fallback storage
      memoryMessages.push(newRecord);
      return res.status(201).json({
        success: true,
        message: 'Your message has been received! Thank you for reaching out.',
        data: newRecord,
      });
    }
  } catch (err) {
    console.error('Contact submission error:', err);
    res.status(500).json({
      success: false,
      error: 'An unexpected server error occurred. Please try again or email directly.',
    });
  }
});

// GET /api/contact - List messages (for portfolio owner / dashboard)
router.get('/', async (req, res) => {
  try {
    if (getDbStatus()) {
      const messages = await Message.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: messages.length, data: messages });
    } else {
      return res.json({ success: true, count: memoryMessages.length, data: memoryMessages });
    }
  } catch (err) {
    console.error('Error fetching messages:', err);
    res.status(500).json({ success: false, error: 'Error fetching messages' });
  }
});

module.exports = router;

