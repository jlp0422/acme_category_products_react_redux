import { createStore, applyMiddleware, combineReducers  } from 'redux';
import thunk from 'redux-thunk';

const productReduer = (state = [], action) => {
  // switch(action.type) {
  // }


  return state;
}

const categoryReducer = (state = [], action) => {
  // switch(action.type) {

  // }

  return state
}


const reducer = combineReducers({
  category: categoryReducer,
  product: productReduer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store;
