import { NextResponse } from "next/server";
import { getTileById } from "@/lib/tiles";

export async function GET(_request, { params }) {
  const tile = await getTileById(params.id);

  if (!tile) {
    return NextResponse.json({ message: "Tile not found" }, { status: 404 });
  }

  return NextResponse.json(tile);
}
