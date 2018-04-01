/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductsFromServer } from './store/productReducer';
import { getCategoriesFromServer, createCategoryOnServer } from './store/categoryReducer';

class Nav extends React.Component {

  componentDidMount() {
    this.props.getProducts()
    this.props.getCategories()
  }

  render() {
    const { categories, products, createCategory } = this.props
    if (!products || !categories) return null
    return (
      <ul style={{ margin: '20px 0px'}}>
        <li>
          <button onClick={ createCategory }>Add Category</button>
        </li>
        <Link to='/products'>
          <li>All Products ({products.length})</li>
        </Link>
        {
          categories.map(c => (
            <Link key={c.id} to={`/categories/${c.id}`}>
              <li key={c.id}>{c.name} - Category ({ products.filter(p => p.categoryId === c.id).length })</li>
            </Link>
          ))
        }
      </ul>
    )
  }
}

const mapState = ({ products, categories }) => {
  return { products, categories }
}

const mapDispatch = (dispatch) => {
  return {
    getProducts: () => dispatch(getProductsFromServer()),
    getCategories: () => dispatch(getCategoriesFromServer()),
    createCategory: () => dispatch(createCategoryOnServer())
  }
}

export default connect(mapState, mapDispatch)(Nav);
