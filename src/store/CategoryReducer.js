/* eslint-disable */
import axios from 'axios';

/************ ACTION CONSTANTS *************/
const GET_CATEGORIES = 'GET_CATEGORIES';
const CREATE_CATEGORY = 'CREATE_CATEGORY';
const DELETE_CATEGORY = 'DELETE_CATEGORY';

/************ ACTION CREATORS *************/
const getCategories = (categories) => ({ type: GET_CATEGORIES, categories})
const createCategory = (category) => ({ type: CREATE_CATEGORY, category })
const deleteCategory = (id) => ({ type: DELETE_CATEGORY, id })

/************ THUNKS *************/
export const getCategoriesFromServer = () => {
  return (dispatch) => {
    return axios.get('/api/categories')
      .then( res => res.data)
      .then( categories => dispatch(getCategories(categories)))
  }
}

export const createCategoryOnServer = () => {
  return (dispatch) => {
    return axios.post('/api/categories')
      .then( res => res.data)
      .then( category => dispatch(createCategory(category)))
  }
}

export const deleteCategoryOnServer = (id) => {
  return (dispatch) => {
    return axios.delete(`/api/categories/${id}`)
      .then(() => dispatch(deleteCategory(id)))
      .then(() => location.hash = '/')
  }
}


/************ REDUCER *************/
const categoryReducer = (state = [], action) => {
  switch(action.type) {

    case GET_CATEGORIES:
      state = action.categories
      break;

    case CREATE_CATEGORY:
      state = [...state, action.category]
      break;

    case DELETE_CATEGORY:
      state = state.filter(category => category.id !== action.id)
      break;

  }

  return state
}

export default categoryReducer;
