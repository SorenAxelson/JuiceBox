require('dotenv').config();
const PORT = 3000;
const express = require("express");3
const morgan = require('morgan');
const server = express();
const apiRouter = require('./api');

server.use(morgan('dev'));
server.use(express.json())
server.use('/api', apiRouter);

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});


