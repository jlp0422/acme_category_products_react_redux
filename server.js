const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const { Product, Category } = db.models

app.use('/dist', express.static(path.join(__dirname, 'dist')))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`port: ${port}`))

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')))

db.sync()
  .then(() => db.seed())
