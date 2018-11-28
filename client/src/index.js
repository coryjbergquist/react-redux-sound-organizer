import React from 'react';
import ReactDOM from 'react-dom';
// import { NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import App from './App'



const store = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
  	<App />
  </Provider>, document.getElementById('root')
);

// const domContainer = document.querySelector('#index_container');
// ReactDOM.render((App), domContainer);
