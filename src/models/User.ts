import { Document, model, Schema } from "mongoose";

export interface IUser extends Document {
  userId: number;
  apiToken: string;
}

const UserSchema = new Schema({
  userId: Number,
  apiToken: String,
});

export const Users = model<IUser>("Users", UserSchema);
