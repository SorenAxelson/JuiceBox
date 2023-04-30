const PORT = 3000;
const express = require("express");
const server = express();

server.get("/hello", () => {
  console.log("shut up you fat mongrel you smell like cheeto dust innit");
});

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});
