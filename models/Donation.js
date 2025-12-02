import mongoose from "mongoose";
import { useRef } from "react";

const donationSchema = new mongoose.Schema(
  {
    donationId: {
      type: Number,
      required: true,
      unique: true
    },
    donorId: {
      type: Number,
      required: true,
      ref: "Alumni"
    },
    amount: {
      type: Number,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    campaign: {
      type: String
    },
    paymentRef: {
        type: String,
        required: true,
        unique: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    anonymous: {
        type: Boolean,
        default: false
    }
  },
  { timestamps: false }
);

export default mongoose.model("Donation", donationSchema);
