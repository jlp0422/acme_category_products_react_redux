/* eslint-disable */
import axios from 'axios';

const GET_CATEGORIES = 'GET_CATEGORIES';

const getCategories = (categories) => ({ type: GET_CATEGORIES, categories})

export const getCategoriesFromServer = () => {
  return (dispatch) => {
    return axios.get('/api/categories')
      .then( res => res.data)
      .then( categories => dispatch(getCategories(categories)))
  }
}

const categoryReducer = (state = [], action) => {
  switch(action.type) {

    case GET_CATEGORIES:
      state = action.categories
      break;

  }

  return state
}

export default categoryReducer;
