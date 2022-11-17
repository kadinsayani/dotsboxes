const express = require("express");
const app = express();
const server = require("http").createServer(app).listen(8080);
const io = require("socket.io").listen(server);
const game = require("../client/scripts/Game.js");

io.sockets.on("connection", (socket) => {
  console.log("client connected");
});
