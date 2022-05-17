// wiki.js - Wiki route module.

var express = require('express');
var app = express();

const port = 3000;

// Home page route.
app.get('/', (req, res) => {
  res.send('Wiki home page');
});

// About page route.
app.get('/about', (req, res) => {
  res.send('About this wiki');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));