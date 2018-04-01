/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import {} from './store/productReducer'

const Products = ({products, categories}) => {
  return (
    <hr />
  )
}

const mapState = ({ products, categories }) => {
  return { products, categories }
}

const mapDispatch = (dispatch) => {
  return {

  }
}

export default connect(mapState, mapDispatch)(Products);
