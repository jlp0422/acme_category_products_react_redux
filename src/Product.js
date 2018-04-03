/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { deleteProductFromServer } from './store/ProductReducer';

const Products = ({product, category, deleteProduct}) => {
  return (
    <div className="list-group-item">
      <strong>Product: </strong>{product.name}&nbsp;&nbsp;
      <button onClick={() => deleteProduct(product.id)}>
        Delete Product
      </button>
      <p><strong>Category: </strong>{category && category.name}</p>
    </div>
  )
}

const mapDispatch = (dispatch) => {
  return {
    deleteProduct: (id) => dispatch(deleteProductFromServer(id))
  }
}

export default connect(null, mapDispatch)(Products);
