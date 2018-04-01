/* eslint-disable */
import axios from 'axios';

/************ ACTION CONSTANTS *************/
const GET_PRODUCTS = 'GET_PRODUCTS';
const CREATE_PRODUCT = 'CREATE_PRODUCT';
const DELETE_CATEGORY = 'DELETE_CATEGORY';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

/************ ACTION CREATORS *************/
const getProducts = (products) => ({ type: GET_PRODUCTS, products })
const createProduct = (product) => ({ type: CREATE_PRODUCT, product })
const deleteProduct = (id) => ({ type: DELETE_PRODUCT, id })

/************ THUNKS *************/
export const getProductsFromServer = () => {
  return (dispatch) => {
    return axios.get('/api/products')
      .then( res => res.data)
      .then( products => dispatch(getProducts(products)))
  }
}

export const createProductOnServer = (id) => {
  return (dispatch) => {
    return axios.post('/api/products', ({id}))
      .then( res => res.data)
      .then( product => dispatch(createProduct(product)))
    }
}

export const deleteProductFromServer = (id) => {
  return (dispatch) => {
    return axios.delete(`/api/products/${id}`)
      .then(() => dispatch(deleteProduct(id)))
      .then(() => location.hash = '/products')
  }
}


/************ REDUCER *************/
const productReducer = (state = [], action) => {
  switch(action.type) {

    case GET_PRODUCTS:
      state = action.products
      break;

    case CREATE_PRODUCT:
      state = [ ...state, action.product ]
      break;

    case DELETE_CATEGORY:
      state = state.filter(product => product.categoryId !== action.id)

    case DELETE_PRODUCT:
      state = state.filter(product => product.id !== action.id )
  }

  return state;
}

export default productReducer;
