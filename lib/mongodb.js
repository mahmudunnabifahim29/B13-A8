import { MongoClient } from "mongodb";
import { MongoMemoryServer } from "mongodb-memory-server";

let uri = process.env.MONGODB_URI;

if (!uri || uri.includes("127.0.0.1") || uri.includes("HOST")) {
  let globalWithMongo = globalThis;
  if (!globalWithMongo._mongod) {
    globalWithMongo._mongod = await MongoMemoryServer.create();
  }
  uri = globalWithMongo._mongod.getUri() + "tiles-gallery";
  console.log("🛠️  Using zero-config in-memory MongoDB at:", uri);
}

if (!uri) {
  throw new Error("Missing MONGODB_URI in environment variables");
}

let cachedClient = globalThis._mongoClient;
let cachedPromise = globalThis._mongoClientPromise;

if (!cachedClient) {
  cachedClient = new MongoClient(uri);
  globalThis._mongoClient = cachedClient;
}

if (!cachedPromise) {
  cachedPromise = cachedClient.connect();
  globalThis._mongoClientPromise = cachedPromise;
}

export const clientPromise = cachedPromise;
export const client = cachedClient;
export const db = cachedClient.db();
