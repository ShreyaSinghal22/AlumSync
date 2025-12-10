const mongoose = require("mongoose");

const profileSkillSchema = new mongoose.Schema(
  {
    // Skill belongs to which profile?
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
      required: true,
      index: true
    },

    // Skill Name e.g. Java, ML, React
    skillName: {
      type: String,
      required: true,
      index: true
    },

    // Skill category
    category: {
      type: String,
      enum: [
        "Programming",
        "Database",
        "Cloud",
        "Design",
        "Soft Skill",
        "Management",
        "Other"
      ],
      default: "Other"
    },

    // Proficiency Level (Optional)
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced", "Expert"],
      default: "Beginner"
    },

    // Endorsements by other users
    endorsedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },
  { timestamps: true }
);

// Prevent duplicate same skill for same profile
profileSkillSchema.index(
  { profile: 1, skillName: 1 },
  { unique: true }
);

// Full skill search index
profileSkillSchema.index({ skillName: "text" });

module.exports = mongoose.model("ProfileSkill", profileSkillSchema);
