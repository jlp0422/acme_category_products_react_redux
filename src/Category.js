import React from 'react';
import { connect } from 'react-redux';
import { createProductOnServer } from './store/productReducer';
import { deleteCategoryOnServer } from './store/categoryReducer';

const Category = ({ category, prods, createProduct, deleteCategory }) => {
  if (!category) return null
  return (
    <div>
      <h1>Category: {category.name}</h1>
      <button onClick={() => deleteCategory(category.id)}>Delete Category</button>
      <button onClick={() => createProduct(category.id) }>Add Product</button>
      <h2>Products</h2>
      <ul>
      {
        prods.map(product => (
          <li key={product.id}>{product.name} - Product</li>
        ))
      }
      </ul>
    </div>
  )
}

const mapState = ({ categories, products }, { id }) => {
  const category = categories && categories.find(c => c.id === id)
  const prods = products.filter(p => p.categoryId === id)
  return { category, prods }
}

const mapDispatch = (dispatch) => {
  return {
    createProduct: (id) => dispatch(createProductOnServer(id)),
    deleteCategory: (id) => dispatch(deleteCategoryOnServer(id))
  }
}

export default connect(mapState, mapDispatch)(Category);