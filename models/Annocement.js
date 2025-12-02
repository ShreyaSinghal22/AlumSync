import mongoose from "mongoose";
import { useRef } from "react";
import Admin from "./Admin";

const announcementSchema = new mongoose.Schema(
  {
    announcementId: {
      type: String,
      required: true,
      unique: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
      type: String,
      required: true
    },
    scheduledDate: {
        type: Date.now
    },
    createdby: {
        type: ObjectId,
        required: true,
        ref: "Admin"
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now
    }
  },
  { timestamps: false }
);

export default mongoose.model("Announcement", announcementSchema);
