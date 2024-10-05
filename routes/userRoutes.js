const express = require('express');
const router = express.Router();

// Define your user routes here
router.get('/', (req, res) => {
  res.send('User List');
});

// Add more user-related routes here
router.get('/profile', (req, res) => {
  res.send('User Profile');
});

module.exports = router;
