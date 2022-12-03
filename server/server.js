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
// let currentRoom = room;

io.on("connection", (socket) => {
  if (rooms.get(room) && rooms.get(room).length === 3) {
    room = Math.floor(Math.random() * 101);
  }
  if (!rooms.get(room)) {
    rooms.set(room, [socket.id]);
  } else {
    rooms.set(room, [...rooms.get(room), socket.id]);
  }
  socket.join(room);
  console.log(rooms);
  const currentRoom = [...socket.rooms][1];
  socket.emit("room", currentRoom);
  socket.on("room", (room) => {
    socket.join(room);
  });
  socket.join(currentRoom);
  console.log(rooms);
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
