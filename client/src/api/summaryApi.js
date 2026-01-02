const base_url = import.meta.env.VITE_BASE_URL;
export default async function summarizeVideo(videoId) {
  console.log("fetching summary");
  const url = `${base_url}/summary/${videoId}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log("data a rha ha:", data)
  return data;
}
