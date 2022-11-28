const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static("../client"));
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

io.on("connection", (socket) => {
  // send game state to new client
  socket.on("game state", (gameState) => {
    console.log(gameState);
    io.emit("game state", gameState);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
