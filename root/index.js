const PORT = 3000;
const express = require("express");3
const server = express();

server.get("/hello", () => {
  console.log("hello");
});

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});
