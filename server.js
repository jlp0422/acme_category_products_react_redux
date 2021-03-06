const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const { Product, Category } = db.models
const faker = require('faker');

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use(require('body-parser').json())

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')))

/************* PRODUCTS *************/
app.get('/api/products', (req, res, next) => {
  Product.findAll()
    .then( products => res.send(products))
    .catch(next)
})

app.post('/api/products', (req, res, next) => {
  Product.create({ name: faker.commerce.productName(), categoryId: req.body.id})
    .then( product => res.send(product))
    .catch(next)
})

app.delete('/api/products/:id', (req, res, next) => {
  Product.findById(req.params.id)
    .then( product => product.destroy())
    .then(() => res.sendStatus(204))
    .catch(next)
})

/************* CATEGORIES *************/
app.get('/api/categories', (req, res, next) => {
  Category.findAll()
    .then( categories => res.send(categories))
    .catch(next)
})

app.post('/api/categories', (req, res, next) => {
  Category.create({ name: faker.commerce.department()})
    .then(category => res.send(category))
    .catch(next)
})

app.delete('/api/categories/:id', (req, res, next) => {
  Category.findById(req.params.id)
    .then(category => category.destroy())
    .then(() => res.sendStatus(204))
    .catch(next)
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`port: ${port}`))

db.sync()
  .then(() => db.seed())
