'use strict';

const express = require('express');
var cors = require('cors')
const app = express()
app.use(cors())

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
app.get('/', (req, res) => {
  res.send('Hello World from Node.js Server');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);