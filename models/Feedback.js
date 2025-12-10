const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    feedbackId: {
      type: String,
      required: true,
      unique: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "userModel"
    },
    userModel: {
      type: String,
      required: true,
      enum: ["Alumni", "Student", "Admin"]
    },
    mesage: {
      type: String,
      required: true,
      index: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: null
    },
    category: {
      type: String,
      enum: [ "Platform",
        "Event", "Job", "Profile", 
        "Registration", "General", "Other"
      ],
      default: "General",
      index: true
    },
    relatedEvent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      default: null
    },
    relatedJob: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      default: null
    },
    isAnonymous: {
      type: Boolean,
      default: false
    },
  },
  { timestamps: true }
);

feedbackSchema.index({message: "text", catgory: 1});
module.exports = mongoose.model("Feedback", feedbackSchema);
