const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    notificationId: {
      type: Number,
      required: true,
      unique: true
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "senderModel",
      default: null
    },
    senderModel: {
      type: String,
      enum: ["Admin", "Alumni", "Student"],
      default: "Admin"
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
      ref: "User"
    },
    type: {
        type: String,
        enum: ["Announcement", "Event", "Job", "Feed", "Comment", "System"],
        default: "System",
        index: true
    },
    message: {
      type: String,
      required: true,
      index: true
    },
    targetRole: {
      type: String,
      enum: ["All", "Students", "Alumni", "Admins"],
      default: "All",
      index: true
    },
     relatedEvent: { type: mongoose.Schema.Types.ObjectId, ref: "Event", default: null },
    relatedJob: { type: mongoose.Schema.Types.ObjectId, ref: "Job", default: null },
    relatedPost: { type: mongoose.Schema.Types.ObjectId, ref: "Feed", default: null },
    relatedComment: { type: mongoose.Schema.Types.ObjectId, ref: "Comment", default: null },
    relatedAnnouncement: { type: mongoose.Schema.Types.ObjectId, ref: "Announcement", default: null },

    isRead: {
      type: Boolean,
      default: false
    },
  },
  { timestamps: true }
);

notificationSchema.index ({message: "text", type: 1, targetRole: 1});

module.imports = mongoose.model("Notification", notificationSchema);
