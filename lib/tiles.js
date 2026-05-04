import tiles from "@/data/tiles.json";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getTiles() {
  await wait(200);
  return tiles;
}

export async function getTileById(id) {
  await wait(200);
  return tiles.find((tile) => tile.id === id);
}

export async function getFeaturedTiles() {
  const allTiles = await getTiles();
  return allTiles.slice(0, 8);
}
