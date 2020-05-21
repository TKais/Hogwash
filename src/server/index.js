const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const port = 8080;

dotenv.config();

// middleware
app.use(express.static('dist'));

app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8000/"); // update to match the domain you will make the request from
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// routes
app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.post('/articles', function(req, res) {
  http
  // return res.json(obj);
});

app.listen(port, function() {
  console.log(`App listening on port ${port}`);
});
