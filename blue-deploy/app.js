// Import express
const express = require('express');
const app = express();

// IMPORTANT: use container port (must match Docker + Jenkins)
const port = 3000;

// Health check route (REQUIRED for Jenkins pipeline)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Main route
app.get('/', (req, res) => {
  res.send('Hello World from Node.js on BLUE/GREEN Deployment!');
});

// IMPORTANT: bind to 0.0.0.0 for Docker
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
