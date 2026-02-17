const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema(
  {
    registrationId: {
      type: String,
      required: true,
      unique: true
    },

    // Who is registering
    user: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "userModel",
      required: true,
      index: true
    },

    userModel: {
      type: String,
      required: true,
      enum: ["Student", "Alumni", "Admin"]
    },

    // What is the registration for?
    targetType: {
      type: String,
      enum: ["Event", "Job"],
      required: true,
      index: true
    },

    targetId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "targetType",
      index: true
    },

    // Registration Status
    status: {
      type: String,
      enum: ["Applied", "Approved", "Selected", "Rejected", "Cancelled"],
      default: "Applied",
      index: true
    },

    // Resume link only for job application
    resumeUrl: {
      type: String,
      default: null
    },

    // Extra notes (optional)
    remarks: {
      type: String,
      default: null
    }
  },
  { timestamps: true }
);

// Prevent duplicate application: Same user cannot register/apply twice
registrationSchema.index(
  { user: 1, targetId: 1 },
  { unique: true }
);

module.exports = mongoose.model("Registration", registrationSchema);
