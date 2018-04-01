/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { deleteProductFromServer } from './store/productReducer';

const Products = ({product, category, deleteProduct}) => {
  return (
    <div className="list-group-item">
      {product.name} - Product&nbsp;&nbsp;
      <button onClick={() => deleteProduct(product.id)}>
        Delete Product
      </button>
      <p>{category && category.name} - Category</p>
    </div>
  )
}

const mapDispatch = (dispatch) => {
  return {
    deleteProduct: (id) => dispatch(deleteProductFromServer(id))
  }
}

export default connect(null, mapDispatch)(Products);
