const express = require('express');
const app = express();
const port = 8080;

// middleware
app.use(express.static('dist'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// routes
app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.get('/test', function(req, res) {
  const obj = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': new Date().toLocaleString()
  };
  return res.json(obj);
});

app.listen(port, function() {
  console.log(`App listening on port ${port}`);
});
