const express = require('express');
const app = express();
const port = 3300;

app.get('/', (req, res) => {
  res.send('Hello, my beatifull world!');
});

app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});
