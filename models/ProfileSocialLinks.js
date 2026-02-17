const mongoose = require("mongoose");

const profileSocialLinkSchema = new mongoose.Schema(
  {
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
      required: true,
      index: true
    },

    platform: {
      type: String,
      enum: [
        "LinkedIn",
        "GitHub",
        "Twitter",
        "Instagram",
        "Facebook",
        "Portfolio",
        "LeetCode",
        "HackerRank",
        "CodeChef",
        "Other"
      ],
      required: true
    },

    url: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

// No duplicate same platform for same profile
profileSocialLinkSchema.index(
  { profile: 1, platform: 1 },
  { unique: true }
);

module.exports = mongoose.model("ProfileSocialLink", profileSocialLinkSchema);
