const path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
//const bodyParser = require('body-parser');

//routes
const web = require('./routes/web');

const dungeon = require('./DungueonCreator/DgCreator').Lista(2, 'Primer paso');

console.log(dungeon);

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.use(web);

io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(3000, () => {
    console.log('server corriendo');
});