const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const emailRoutes = require('./routes/emailRoutes');

dotenv.config();

const app = express();
app.use(express.json()); // To parse incoming JSON requests

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log(err));

  // Middleware to parse JSON bodies
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Welcome to the Gmail Clone API');
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/emails', emailRoutes);

// Start the server
const PORT = 3000; // Change the port to 3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
