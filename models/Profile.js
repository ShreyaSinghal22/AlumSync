const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "userModel",
      required: true,
      unique: true  // one profile per user
    },

    userModel: {
      type: String,
      required: true,
      enum: ["Alumni", "Student", "Admin"]
    },

    // Profile media
    profilePicture: {
      type: String,
      default: null
    },

    coverPhoto: {
      type: String,
      default: null
    },

    // Personal Details
    bio: {
      type: String,
      default: ""
    },

    phone: {
      type: String,
      default: null
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other", "Prefer not to say"],
      default: "Prefer not to say"
    },

    dateOfBirth: {
      type: Date,
      default: null
    },

    // Education Details (Mainly for alumni & students)
    education: [
      {
        institute: String,
        degree: String,
        fieldOfStudy: String,
        startYear: Number,
        endYear: Number,
        grade: String
      }
    ],

    // Work / Experience Details (Alumni purpose)
    experience: [
      {
        company: String,
        title: String,
        location: String,
        startDate: Date,
        endDate: Date,
        current: Boolean,
        description: String
      }
    ],

    // Living location
    location: {
      city: String,
      state: String,
      country: String
    },

    // Short tagline - like LinkedIn headline
    headline: {
      type: String,
      default: ""
    },

    // Visibility settings
    visibility: {
      type: String,
      enum: ["Public", "Students", "Alumni", "Only Me"],
      default: "Public"
    }

  },
  { timestamps: true }
);

// Searchable fields
profileSchema.index({
  bio: "text",
  headline: "text",
  "location.city": "text",
  "location.state": "text",
  "location.country": "text"
});

module.exports = mongoose.model("Profile", profileSchema);
