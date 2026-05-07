// Import express
const express = require('express');
const app = express();

const port = 3000;

const DEPLOYMENT = process.env.DEPLOYMENT || "UNKNOWN";

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/', (req, res) => {
  res.send(`Hello World from Node.js on ${DEPLOYMENT.toUpperCase()} Deployment!`);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port} (${DEPLOYMENT} container)`);
});
