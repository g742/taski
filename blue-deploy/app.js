const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const DEPLOYMENT = (process.env.DEPLOYMENT || "UNKNOWN").toUpperCase();

app.get('/health', (req, res) => {
  res.status(200).json({
    status: "UP",
    deployment: DEPLOYMENT
  });
});

app.get('/', (req, res) => {
  res.send(`Hello World from Node.js on ${DEPLOYMENT} Deployment!`);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port} (${DEPLOYMENT} container)`);
});
