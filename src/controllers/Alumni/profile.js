const express = require('express');
const router = express.Router();
const Alumni = require('../models/Alumni');

// GET /api/student/profile/me
const getprof = ('/me', async (req, res) => {
    const profile = await Student.findOne({ user: req.user._id });
    res.json(profile);
});

// PUT /api/student/profile/me
const profupdate = ('/me', async (req, res) => {
    const updated = await Student.findOneAndUpdate(
        { user: req.user._id },
        { $set: req.body },
        { new: true }
    );
    res.json(updated);
});

module.exports = {
    getprof,
    profupdate
};