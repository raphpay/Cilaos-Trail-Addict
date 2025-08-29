import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  // req.url is absolute, so we can parse it
  const url = new URL(req.url);
  const parts = url.pathname.split("/");
  const slug = parts[parts.length - 1]; // Get the last part as it is the slug

  try {
    const race = await prisma.race.findUnique({
      where: { id: slug },
    });

    if (!race) {
      return NextResponse.json({ error: "Race not found" }, { status: 404 });
    }

    return NextResponse.json({
      ...race,
      date: race.date.toISOString(),
    });
  } catch (err) {
    console.error("Failed to fetch race", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
