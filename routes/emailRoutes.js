const express = require('express');
const router = express.Router();

// Define your email routes here
router.get('/inbox', (req, res) => {
  res.send('Inbox emails');
});

router.get('/sent', (req, res) => {
  res.send('Sent emails');
});

// Add more email-related routes here
router.get('/draft', (req, res) => {
  res.send('Draft emails');
});

module.exports = router;
