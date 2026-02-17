const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
    fullname: {
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
    role: {
    type: String,
    enum: ["superadmin", "admin", "moderator"],
    required: true,
    default: "admin"
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    phone: {
      type: String
    },
    verified: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);
AdminSchema.index({ fullnamename: "text", email: "text"});
module.exports = mongoose.model("Admin", AdminSchema);
