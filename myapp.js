const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Default route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Route for the Add to List page
app.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname, 'add.html'));
});

// Route for the Login page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});