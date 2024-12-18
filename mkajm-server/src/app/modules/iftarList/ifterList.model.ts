import mongoose, { Document, Schema } from "mongoose";
import { TIfterList } from "./ifterList.interface";

// TIfterList extends Document to include Mongoose document methods like `_id`
interface IIfterList extends TIfterList, Document {}

const ifterListSchema: Schema<IIfterList> = new Schema({
  ramajan: { type: Number, required: true },
  date: { type: Date, required: true },
  day: { type: String, required: true },
  bnDate: { type: String, required: true },
  iftarTime: { type: String, required: false },
  sahriTime: { type: String, required: false },
  name: { type: [String], required: false },
});

const IfterList = mongoose.model<IIfterList>("IftarList", ifterListSchema);
export default IfterList;
