import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import App from './App'



const store = createStore(rootReducer, applyMiddleware(thunk));



const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

ReactDOM.render(
  <Provider store={store}>
  	<App />
  </Provider>, document.getElementById('root')
);

// const domContainer = document.querySelector('#index_container');
// ReactDOM.render((App), domContainer);
