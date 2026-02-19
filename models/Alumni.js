const mongoose = require("mongoose");

const AlumniSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  interest: [{
    name: {type: String},
    category: {
      type: String,
      enum: ["Professional", "Hobby", "Skill"],
      default: "Professional"
    }
  }],
  batch: {
    type: String,
    index: true
  },
  department: {
    type: String,
    index: true
  },
  phone: {
    type: String
  },
  currentCompany: {
    type: String,
    index: true
  },
  verified: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

AlumniSchema.index({ name: "text", email: "text", department: "text", currentcompany: "text"});

module.exports = mongoose.model("Alumni", AlumniSchema);
