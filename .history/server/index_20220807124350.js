const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello world'));

const PORT = 5000;
