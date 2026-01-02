const base_url = import.meta.env.VITE_BASE_URL;
export default async function summarizeVideo(videoId) {
  const url = `${base_url}${videoId}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log("data a rha ha:", data)
  return data;
}
