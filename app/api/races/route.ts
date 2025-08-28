import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const races = await prisma.race.findMany();
  return NextResponse.json(races);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, date, distance, price } = body;
  const race = await prisma.race.create({
    data: { name, date: new Date(date), distance, price },
  });
  return NextResponse.json(race, { status: 201 });
}
