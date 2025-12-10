const mongoose = require("mongoose");

const rolePermissionSchema = new mongoose.Schema(
  {
    permission: {
      type: String,
      required: true,
      unique: true,
      index: true,
      enum: [
        // Admin + SuperAdmin permissions
        "CREATE_EVENT",
        "UPDATE_EVENT",
        "DELETE_EVENT",
        "CREATE_JOB",
        "UPDATE_JOB",
        "DELETE_JOB",
        "CREATE_ANNOUNCEMENT",
        "DELETE_ANNOUNCEMENT",
        "VIEW_DONATION",
        "MANAGE_USERS",

        // Content moderation
        "DELETE_POST",
        "DELETE_COMMENT",

        // Basic user actions (Alumni/Student)
        "LIKE_POST",
        "COMMENT_POST",
        "ATTEND_EVENT",
        "APPLY_JOB"
      ]
    },

    description: {
      type: String,
      default: ""
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

rolePermissionSchema.index({ permission: "text", description: "text" });

module.exports = mongoose.model("RolePermission", rolePermissionSchema);
