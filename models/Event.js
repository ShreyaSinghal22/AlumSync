const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    eventId: {
      type: String,
      required: true,
      unique: true
    },
    title: {
      type: String,
      required: true,
      index: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      enum: ["Alumni Meet", "Workshop", "Seminar", "Webinar", "Cultural", "Sports", "Online", "Other"],
      default: "Other",
      index: true
    },
    mode: {
      type: String,
      enum: ["Online", "Offline", "Hybrid"],
      default: "Offline",
      index: true
    },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    },
    venue: {
      type: String,
      default: null
    },
    meetingLink: {
      type: String,
      default: null
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "createdByModel"
    },
    createdByModel: {
      type: String,
      required: true,
      enum: ["Admin", "Alumni", "Student"]
    },
    capacity: {
        type: Number,
        default: null
    },
    participants: [{
      userId: { type:mongoose.Schema.Types.ObjectId, ref: "User"},
      joinedAt: { type:Date, default: Date.now}
    }],
    interested: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }],
    isActive: {
      type:Boolean,
      default: true
    },
  },
  { timestamps: true }
);

eventSchema.index({ title: "text", description: "text", category: 1, mode: 1});

module.exports = mongoose.model("Event", eventSchema);
