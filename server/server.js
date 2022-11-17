const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
server.listen(8080);
//const game = require("../client/scripts/Game.js");

io.sockets.on("connection", (socket) => {
  console.log("client connected");
});
