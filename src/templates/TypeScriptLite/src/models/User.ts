import { model, Schema } from "mongoose";
import type { SchemaTimestampsConfig } from "mongoose";

interface UserModel extends SchemaTimestampsConfig {
  name: string;
  email: string;
  password: string;
}

/**
 * Simple model for a User. you can use this as a base for other models.
 */

const UserSchema = new Schema<UserModel>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = model<UserModel>("User", UserSchema);

export default User;
