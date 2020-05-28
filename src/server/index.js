const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const https = require('https');
const port = 8080;

dotenv.config();

// Middleware
app.use(express.static('dist'));

app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", 'http://localhost:8000'); // update to match the domain you will make the request from
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Helper functions
function getNewsArticles(url) {
  return new Promise((res, rej) => {
    try {
      https.get(url, response => {
        let data = '';
    
        response.on('data', chunk => {
          data += chunk;
        });
    
        response.on('end', () => {
          res(JSON.parse(data));
        });
      })
    } catch (err) {
      rej(err.message);
    }
  });
}

// Routes
app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.post('/articles', function(req, res) {
  const composedUrl = `${process.env.API_URL}q=${req.body}&apiKey=${process.env.API_KEY}`;
  getNewsArticles(composedUrl).then(data => res.json(data));
});

app.listen(port, function() {
  console.log(`App listening on port ${port}`);
});
