const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const PORT = process.env.PORT || 3000;

app.use(express.static("../client"));
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

io.on("connection", (socket) => {
  // send game state to new client
  socket.on("game state", (gameState) => {
    console.log("game state", gameState);
    io.emit("game state", gameState);
  });
  socket.on("update line", (data) => {
    socket.broadcast.emit("update line", data);
  });
  socket.on("join code", (joinCode) => {
    socket.broadcast.emit("join code", joinCode);
  });
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
