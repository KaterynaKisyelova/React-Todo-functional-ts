import mongoose from "mongoose";

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: String,
  completed: Boolean,
});

export default mongoose.model("Todo", todoSchema);
