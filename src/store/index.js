import { createStore, applyMiddleware, combineReducers  } from 'redux';
import thunk from 'redux-thunk';
import categoryReducer from './categoryReducer';
import productReducer from './productReducer';

const reducer = combineReducers({
  categories: categoryReducer,
  products: productReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store;
