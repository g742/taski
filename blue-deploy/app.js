// Import express
const express = require('express');
const app = express();

// IMPORTANT: use container port (must match Docker + Jenkins)
const port = 3000;

// Identify container type (set via environment variable in Jenkins pipeline)
const DEPLOYMENT = process.env.DEPLOYMENT || "UNKNOWN";

// Health check route (REQUIRED for Jenkins pipeline)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Main route
app.get('/', (req, res) => {
  res.send(`Hello World from Node.js on ${DEPLOYMENT.toUpperCase()} Deployment!`);
});

// IMPORTANT: bind to 0.0.0.0 for Docker
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port} (${DEPLOYMENT} container)`);
});
