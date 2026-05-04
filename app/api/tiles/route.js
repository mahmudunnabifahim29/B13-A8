import { NextResponse } from "next/server";
import { getTiles } from "@/lib/tiles";

export async function GET() {
  const tiles = await getTiles();
  return NextResponse.json(tiles);
}
