import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  console.log(req);
  return NextResponse.json("User Succeffully logged in");
}
