import { io } from "socket.io-client";

const socket = io('http://localhost:8001');

socket.on("connect", () => {
    console.log(`Connected with id of: ${socket.id}`);

    socket.on(`matchSuccess`, (socketId1, newRoomId) => {
        if (socket.id == socketId1 || socket.id == socketId2) {
          console.log(`Successfully joined room! of ${newRoomId}`)
        }
    })
})

socket.emit("match", {username : 'tester123', difficulty : 'hardy'});
