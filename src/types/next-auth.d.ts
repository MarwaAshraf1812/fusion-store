import "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    role?: "ADMIN" | "CUSTOMER";
  }

  interface Session {
    user: {
      id: string;
      role: "ADMIN" | "CUSTOMER";
      email?: string;
      name?: string;
      image?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: "ADMIN" | "CUSTOMER";
  }
}