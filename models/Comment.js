const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    commentId: {
      type: String,
      required: true,
      unique: true
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "authorModel"
    },
    authorModel: {
      type: String,
      required: true,
      enum: ["Admin", "Alumni", "Student"]
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Feed",
      default: null
    },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      default: null
    },
    likes: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "authorModel"
    },
    content: {
      type: String,
      required: true,
      index: true
    },
  },
  { timestamps: true }
);

commentSchema.index ({content: "text"});
module.exports = mongoose.model("Comment", commentSchema);
