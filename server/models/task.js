import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide title"],
      maxlength: 150,
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Please provide description"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Task", TaskSchema);
