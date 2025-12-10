const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: true,
      unique: true,
      index: true
    },

    // Link to login user table
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true
    },

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

    phone: {
      type: String,
      default: null
    },

    // Academic Info
    department: {
      type: String,
      required: true,
      index: true
    },

    batch: {
      type: String, // e.g. 2022–2026
      required: true,
      index: true
    },

    enrollmentNumber: {
      type: String,
      required: true,
      unique: true,
      index: true
    },

    currentYear: {
      type: Number, // 1,2,3,4
      default: 1
    },

    section: {
      type: String,
      default: null
    },

    // Placement Eligibility
    eligibleForPlacement: {
      type: Boolean,
      default: true
    },

    // Transition to Alumni
    isGraduated: {
      type: Boolean,
      default: false
    },

    graduationYear: {
      type: Number,
      default: null
    }
  },
  { timestamps: true }
);

// Search optimization
studentSchema.index({
  name: "text",
  email: "text",
  department: 1,
  batch: 1
});

module.exports = mongoose.model("Student", studentSchema);
