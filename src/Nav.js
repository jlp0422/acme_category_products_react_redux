/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { getProductsFromServer } from './store/productReducer';
import { getCategoriesFromServer } from './store/categoryReducer';

class Nav extends React.Component {
  componentDidMount() {
    this.props.getProducts()
    // this.props.getCategories()
  }
  render() {
    console.log(this.props.products)
    return (
      <ul>
        <li>
          <button>Add Product</button>
        </li>
      </ul>
    )
  }
}

const mapState = ({ products, categories}) => {
  return { products, categories }
}

const mapDispatch = (dispatch) => {
  return {
    getProducts: () => dispatch(getProductsFromServer()),
    getCategories: () => dispatch(getCategoriesFromServer())
  }
}

export default connect(mapState, mapDispatch)(Nav);
