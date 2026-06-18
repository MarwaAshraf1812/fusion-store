"use server";

import { signIn } from "@/lib/auth";
import { redirect } from "next/navigation";

export const login = async (email:string ,password:string) => {
  
  await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  redirect("/admin");
};