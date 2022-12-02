const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const PORT = process.env.PORT || 3000;
let rooms = new Map();

app.use(express.static("../client"));
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

let room = Math.floor(Math.random() * 101);
let currentRoom = room;

io.on("connection", (socket) => {
  if (rooms.get(currentRoom) === undefined) {
    rooms.set(currentRoom, 0);
  } else {
    rooms.set(currentRoom, rooms.get(currentRoom) + 1);
  }
  if (rooms.get(currentRoom) === 3) {
    currentRoom = Math.floor(Math.random() * 101);
  }
  socket.join(currentRoom);
  io.to(currentRoom).emit("room", currentRoom);
  socket.on("gameState", (gameState) => {
    socket.to(currentRoom).emit("gameState", gameState);
  });
  socket.on("update line", (data) => {
    socket.broadcast.to(currentRoom).emit("update line", data);
  });
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
