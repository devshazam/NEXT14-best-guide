import { auth } from "auth";
import { NextResponse } from "next/server";

export const GET = auth((req) => {
  if (req?.auth?.user) return NextResponse.json({ data: "Protected data" });
  return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
});
