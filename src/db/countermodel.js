import mongoose from "mongoose";

const counterSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  value: { type: Number, default: 0 },
});

export const Counter = mongoose.model("Counter", counterSchema);

async function getNextId() {
  const counter = await Counter.findOneAndUpdate(
    { name: "Id" },
    { $inc: { value: 1 } },
    { new: true, upsert: true }
  );

  return counter.value; 
}
export default getNextId;