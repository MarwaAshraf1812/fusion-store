import mongoose from "mongoose";

export enum UserRole {
  ADMIN = "ADMIN",
  CUSTOMER = "CUSTOMER"
}

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    image: String,
    password: { type: String, required: true, },
    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.CUSTOMER,
    },
  },
  { timestamps: true }
);
export const User = mongoose.models.User || mongoose.model("User", userSchema);