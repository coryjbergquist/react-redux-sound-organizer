import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import App from './App'
import Home from './test'


const store = createStore(rootReducer, applyMiddleware(thunk));

const app = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};


const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () =>
  <div>
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    </div>

// ReactDOM.render(
//   <Provider store={store}>
//   	<App />
//   </Provider>, document.getElementById('root')
// );



ReactDOM.render((
  <Router>
    <React.Fragment>
    <Navbar />
      <Route path="/" component={app} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
