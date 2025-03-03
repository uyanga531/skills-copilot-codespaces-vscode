// Create web server
var express = require('express');
var app = express();

// Create a route for the home page
app.get('/', function(req, res) {
  res.send('Welcome to the home page!');
});

// Create a route for the about page
app.get('/about', function(req, res) {
  res.send('Welcome to the about page!');
});

// Tell the server to listen on port 3000
app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});

// Now if you go to localhost:3000 in your browser, you should see the home page
// If you go to localhost:3000/about, you should see the about page