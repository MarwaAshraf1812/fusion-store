"use server";

import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import { User, UserRole } from "@/models/User";

export const register = async (data: {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}) => {

  try {
    await connectDB();
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
      return { success: false, message: "User already exists" };
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await User.create({
      ...data,
      password: hashedPassword,
    });
    return { success: true, user };
  } catch (error) {
    console.error("Registration error:", error);
    return { success: false, message: "Registration failed" };
  }
};