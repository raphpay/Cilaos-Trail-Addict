import { NextResponse } from "next/server";
import { deleteSession } from "../../../business-logic/lib/session";

export async function POST() {
  await deleteSession();
  return NextResponse.json({ success: true });
}
