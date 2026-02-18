const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema(
  {
    donationId: {
      type: String,
      required: true,
      unique: true
    },
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "donorModel"
    },
    donorModel: {
      type: String,
      required: true,
      enum: ["Alumni", "Student", "Admin"]
    },
    donorName: {
      type: String,
      index: true
    },
    amount: {
      type: Number,
      required: true,
      min: 1
    },
    paymentMethod: {
      type: String,
      enum: ["Online", "Offline", "Card", "BankTransfer", "Cash"],
      required: true
    },
    transactionId: {
      type: String,
      default: null
    },
    paymentStatus: {
      type: String,
      enum: ["Success", "Pending", "Failed"],
      default: "Pending"
    },
    message: {
      type: String,
      default: null
    },
    receiptUrl: {
      type: String,
      default: null
    },
    date: {
      type: Date,
      required: true
    },
    campaign: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DonationCampaign",
      default: null
    },
  },
  { timestamps: true }
);

donationSchema.index({ donorName: "text", transactionId: "text"});

module.exports = mongoose.model("Donation", donationSchema);
