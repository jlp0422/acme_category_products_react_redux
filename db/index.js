const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/demo_db', {
  logging: false
});
const faker = require('faker');

const Category = conn.define('category', {
  name: Sequelize.STRING
})

const Product = conn.define('product', {
  name: Sequelize.STRING
})

const sync = () => {
  return conn.sync({ force: true })
}

const seed = () => {
  return Promise.all([
    Category.create({ name: faker.commerce.department() }),
    Category.create({ name: faker.commerce.department() }),
    Category.create({ name: faker.commerce.department() }),
    Product.create({ name: faker.commerce.productName() }),
    Product.create({ name: faker.commerce.productName() }),
    Product.create({ name: faker.commerce.productName() }),
    Product.create({ name: faker.commerce.productName() }),
    Product.create({ name: faker.commerce.productName() }),
  ])
  .then(([ cat1, cat2, cat3, prod1, prod2, prod3, prod4, prod5]) => {
    prod1.setCategory(cat1)
    prod2.setCategory(cat2)
    prod3.setCategory(cat3)
    prod4.setCategory(cat2)
    prod5.setCategory(cat3)
  })
}

Product.belongsTo(Category)
Category.hasMany(Product, { onDelete: 'cascade', hooks: true })

module.exports = {
  sync,
  seed,
  models: {
    Category,
    Product
  }
}
