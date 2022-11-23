const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
server.listen(3001);
//const game = require("../client/scripts/Game.js");

io.sockets.on("connection", (socket) => {
  console.log("client connected");
});

// serve index.html from ../client
app.use(express.static("../client"));
app.get("/", (req, res) => {
  res.sendFile("index.html");
});
