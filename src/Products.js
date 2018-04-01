/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';

const Products = ({ products, categories }) => {
  return (
    <div className="list-group">
    {
      products && products.map(product => (
        <Product key={product.id} product={product} category={categories.find(c => c.id === product.categoryId)} />
      ))
    }
    </div>
  )
}


const mapState = ({ products, categories }) => {
  return { products, categories }
}

export default connect(mapState)(Products);
