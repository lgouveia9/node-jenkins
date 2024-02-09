const express = require('express');
const app = express();
const port = 3300;

app.get('/', (req, res) => {
  res.send('Hello, DOCKER STACK DEPLOY IN DOCKER SWARM NEW!');
});

app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});
