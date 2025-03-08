import mongoose from "mongoose";

const bugSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, enum: ["Open", "In-Progress", "Resolved"], default: "Open" },
}, { timestamps: true });

export default mongoose.model("Bug", bugSchema);
