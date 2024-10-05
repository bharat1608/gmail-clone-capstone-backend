const Email = require('../models/Email');

// Send an email or save as draft
exports.sendEmail = async (req, res) => {
  const { to, subject, message, isDraft } = req.body;
  const from = req.user.email;

  try {
    const email = new Email({ from, to, subject, message, isDraft: isDraft || false });
    await email.save();
    res.status(201).json({ message: isDraft ? 'Draft saved' : 'Email sent' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
};

// Fetch inbox
exports.getInbox = async (req, res) => {
  try {
    const emails = await Email.find({ to: req.user.email, isDeleted: false });
    res.status(200).json(emails);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve inbox emails' });
  }
};

// Fetch sent emails
exports.getSentEmails = async (req, res) => {
  try {
    const emails = await Email.find({ from: req.user.email, isDeleted: false });
    res.status(200).json(emails);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve sent emails' });
  }
};

// Fetch starred emails
exports.getStarredEmails = async (req, res) => {
  try {
    const emails = await Email.find({ to: req.user.email, isStarred: true, isDeleted: false });
    res.status(200).json(emails);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve starred emails' });
  }
};

// Fetch all emails
exports.getAllEmails = async (req, res) => {
  try {
    const emails = await Email.find({
      $or: [{ from: req.user.email }, { to: req.user.email }],
      isDeleted: false
    });
    res.status(200).json(emails);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve all emails' });
  }
};

// Fetch draft emails
exports.getDraftEmails = async (req, res) => {
  try {
    const emails = await Email.find({ from: req.user.email, isDraft: true });
    res.status(200).json(emails);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve draft emails' });
  }
};

// Fetch bin emails (deleted)
exports.getBinEmails = async (req, res) => {
  try {
    const emails = await Email.find({ to: req.user.email, isDeleted: true });
    res.status(200).json(emails);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve bin emails' });
  }
};
