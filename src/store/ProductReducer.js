/* eslint-disable */
import axios from 'axios';

/************ ACTION CONSTANTS *************/
const GET_PRODUCTS = 'GET_PRODUCTS';


/************ ACTION CREATORS *************/
const getProducts = (products) => ({ type: GET_PRODUCTS, products })


/************ THUNKS *************/
export const getProductsFromServer = () => {
  return (dispatch) => {
    return axios.get('/api/products')
      .then( res => res.data)
      .then( products => dispatch(getProducts(products)))
  }
}


/************ REDUCER *************/
const productReducer = (state = [], action) => {
  switch(action.type) {

    case GET_PRODUCTS:
      state = action.products
      break;
  }

  return state;
}

export default productReducer;
