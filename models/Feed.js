const mongoose = require("mongoose");

const feedSchema = new mongoose.Schema(
  {
    postId: {
      type: Number,
      required: true,
      unique: true
    },
    content: {
      type: String,
      required: true,
      index: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "authorModel"
    },
    authorModel: {
      type: String,
      required: true,
      enum: ["Admin", "Alumni", "Student"]
    },
    media: {
      url: String,
      fileTypes: String,
      fileName: String
    },
    Likes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    tags: {
      type: String,
      index: true
    },
    parentPost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Feed",
      default: null
    },
    visibility: {
      type: String,
      enum: ["Public", "Students", "Alumni", "Admins"],
      default: "Public",
      index: true
    },
    isActive: {
      type: Boolean,
      default: true
    },
  },
  { timestamps: true }
);

feedSchema.index({content: "text", tags: "text" });
module.exports = mongoose.model("Feed", feedSchema);
