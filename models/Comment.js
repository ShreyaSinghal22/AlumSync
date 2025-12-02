import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    commentId: {
      type: Number,
      required: true,
      unique: true
    },
    authorId: {
      type: Number,
      required: true
    },
    postId: {
      type: Number,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: false }
);

export default mongoose.model("Comment", commentSchema);
