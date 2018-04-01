/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { deleteProductFromServer } from './store/productReducer';

const Products = ({products, categories, deleteProduct}) => {
  return (
    <ul className="list-group">
    {
      products &&
      products.map(product => (
        <li className="list-group-item" key={product.id}>
          {product.name} - Product&nbsp;&nbsp;
          <button onClick={() => deleteProduct(product.id)}>
            Delete Product
          </button>
          <br/>
          <p>{categories.find(category => category.id === product.categoryId).name} - Category</p>
        </li>
      ))
    }
    </ul>
  )
}

const mapState = ({ products, categories }) => {
  return { products, categories }
}

const mapDispatch = (dispatch) => {
  return {
    deleteProduct: (id) => dispatch(deleteProductFromServer(id))
  }
}

export default connect(mapState, mapDispatch)(Products);
