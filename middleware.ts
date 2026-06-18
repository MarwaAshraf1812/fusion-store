import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const session = req.auth;
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");

  if (isAdminRoute) {
    if (!session || session.user?.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/unauthorized", req.nextUrl.origin));
    }
  }

  return NextResponse.next();
});
