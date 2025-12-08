import { configDotenv } from "dotenv";
configDotenv();

import http from "http";
import app from "./src/app.js";

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
