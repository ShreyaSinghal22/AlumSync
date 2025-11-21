import mongoose from "mongoose";

const alumniSchema = new mongoose.Schema({
  alumniId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  batch: {
    type: String
  },
  department: {
    type: String
  },
  phone: {
    type: String
  },
  currentCompany: {
    type: String
  },
  verified: {
    type: Boolean,
    default: "false"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

export default mongoose.model("Alumni", alumniSchema);
