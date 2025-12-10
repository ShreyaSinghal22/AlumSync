const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      index: true,
      enum: ["SuperAdmin", "Admin", "Alumni", "Student", "Moderator"]
    },

    description: {
      type: String,
      default: ""
    },

    // References to permissions assigned to the role
    permissions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "RolePermission"
      }
    ],

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

roleSchema.index({ name: "text", description: "text" });

module.exports = mongoose.model("Role", roleSchema);
