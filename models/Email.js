const mongoose = require('mongoose');

const EmailSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  dateSent: {
    type: Date,
    default: Date.now,
  },
  isStarred: {
    type: Boolean,
    default: false,
  },
  isDraft: {
    type: Boolean,
    default: false,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  }
});

module.exports = mongoose.model('Email', EmailSchema);
