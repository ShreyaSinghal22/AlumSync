const mongoose = require("mongoose");

const postLikeSchema = new mongoose.Schema(
  {
    likeId: {
      type: String,
      required: true,
      unique: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "userModel",
      required: true
    },
    userModel: {
      type: String,
      required: true,
      enum: ["Admin", "Alumni", "Student"]
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Feed",
      required: true,
      index: true
    },
    isLiked: {
      type: Boolean,
      default: true
    },
  },
  { timestamps: true }
);

postLikeSchema.index ({user: 1, post: 1}, {unique: true});

module.exports = mongoose.model("PostLike", postLikeSchema);
