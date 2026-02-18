const mongoose = require("mongoose");

const AnnouncementSchema = new mongoose.Schema(
  {
    announcementId: {
      type: String,
      required: true,
      unique: true
    },
    title: {
        type: String,
        required: true,
        index: true
    },
    content: {
      type: String,
      required: true
    },
    scheduledDate: {
        type: Date,
        default: null
    },
    createdby: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Admin",
        index: true
    },
  },
  { timestamps: true }
);

AnnouncementSchema.index({title: "text",scheduledDate: 1});
module.exports = mongoose.model("Announcement", AnnouncementSchema);
