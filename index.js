const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('express crud get!');
});

app.listen(port, () => {
  console.log(process.env.PORT);
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
