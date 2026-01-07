import { createClient } from "redis";

const redis_username = process.env.REDIS_USERNAME;
const redis_password = process.env.REDIS_PASSWORD;
const redis_host = process.env.REDIS_HOST;
const redis_port = process.env.REDIS_PORT;

const client = createClient({
  username: redis_username,
  password: redis_password,
  socket: {
    host: redis_host,
    port: redis_port,
  },
});

client.on("error", (err) => console.log("Redis Client Error", err));

export async function connectToRedis() {
  try {
    await client.connect();
    console.log("...Connected to redis...");
  } catch (error) {
    console.error("Error while connecting to Redis", error);
  }
}

export async function cacheVideoData(videoId, transcript, summary) {
  try {
    const key = `videoId:${videoId}`;
    const val = [{ transcript: transcript, summary: summary }];

    await client.set(key, JSON.stringify(val), {
      NX: true,
    });
    console.log("Data Cached");
  } catch (error) {
    return err;
  }
}

export async function getCacheVideoData(videoId) {
  try {
    const key = `videoId:${videoId}`;
    const data = await client.get(key);
    return data;
  } catch (error) {
    throw error;
  }
}
