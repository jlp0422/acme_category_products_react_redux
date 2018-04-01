const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const { Product, Category } = db.models

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')))

app.get('/api/products', (req, res, next) => {
  Product.findAll()
    .then( products => res.send(products))
    .catch(next)
})

app.get('/api/categories', (req, res, next) => {
  Category.findAll()
    .then( categories => res.send(categories))
    .catch(next)
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`port: ${port}`))

db.sync()
  .then(() => db.seed())
