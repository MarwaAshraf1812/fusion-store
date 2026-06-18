import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env");
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

let globalWithMongoose = global as typeof globalThis & {
  mongoose?: MongooseCache;
};

let cached = globalWithMongoose.mongoose;

if (!cached) {
  cached = globalWithMongoose.mongoose = { conn: null, promise: null };
}

export const connectDB = async () => {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((m) => m);
  }
  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }
  return cached.conn;
};