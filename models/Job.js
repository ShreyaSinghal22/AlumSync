const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    jobId: {
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
    skillsRequired: {
      type: String,
      index: true
    },
    companyName: {
      type: String,
      required: true,
      index: true
    },
    salary: {
      minSalary: { type:Number, default: null},
      maxSalary: {type: Number, default: null},
      currency: {type: String, default: "INR"}
    },
    jobType: {
      type: String,
      enum: ["Full-Time", "Part-Time", "Internship", "Contract", "Remote"],
      default: "Full-Time",
      index: true
    },
    location: {
      type: String,
      index: true
    },
    remoteAllowed: {
      type: Boolean,
      default: false
    },
    experienceRequired: {
      type: String,
      default: "Fresher"
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      rePath: "postedByModel",
      required: true
    },
    postedByModel: {
      type: String,
      required: true,
      enum: ["Admin", "Alumni"]
    },
    applicationDeadline: {
      type: Date,
      default: null
    },
    attachments: [{
      url: String,
      fileName: String,
      fileType: String
    }],
    applicants: [{
      userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
      appliedAt: {type: Date, default: Date.now},
      resumeUrl: {type: String}
    }],
    savedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    isActive: {
      type: Boolean,
      default: true
    },
  },
  { timestamps: true }
);

jobSchema.index({title: "text", companyName: "text", skillsRequired: "text", location: "text" });
module.exports = mongoose.model("Job", jobSchema);
