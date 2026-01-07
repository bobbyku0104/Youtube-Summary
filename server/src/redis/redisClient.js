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

export async function cacheVideoData(videoId, transcript, videoSummary) {
  try {
    const key = `videoId:${videoId}`;
    const val = { transcript: transcript, summary: videoSummary };

    await client.set(key, JSON.stringify(val), {
      NX: true,
    });
    console.log("Data Cached");
  } catch (error) {
    console.log("Error in Caching VideoData", error);
  }
}

export async function getCacheVideoData(videoId) {
  try {
    const key = `videoId:${videoId}`;
    const data = await client.get(key);
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (error) {
    console.error("Error while Fetching Cached Data", error);
  }
}
