const http = require('http');
const express = require('express');

let app = express();

const hostname = 'localhost'; //change to 0.0.0.0 and the package.json start later for azure
const port = 8080;

/*const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello Cloud Admin<h1>');
});*/

app.get('/', function (req, res){
  res.sendFile('/revature/p1/p1/app/index.html')
});

/*server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/

app.listen(port, hostname);