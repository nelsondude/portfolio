const path = require('path');
const express = require('express');
const app = express();
const http = require('http').createServer(app);


app.use(express.static(path.join(__dirname, '/build')));

app.get('*', (req, res) => {
  res.sendFile(__dirname+"/build/index.html");
});


const port = process.env.PORT || 3000;
http.listen( port , () => {
  console.log('listening to port ' + port)
});