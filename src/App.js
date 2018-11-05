import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import AddSounds from './components/AddSounds';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import SoundsListContainer from './containers/SoundsListContainer';

import Home from './test';

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
      to="/sounds"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: 'darkblue'
      }}
    >Sounds</NavLink>
    </div>


class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">

        <div>
          <p>list of sounds</p>
        lies
        </div>

        <div>
          <AddSounds />
        </div>

          <div>
          <Router>
            <React.Fragment>
              <Route path="/sounds" component={SoundsListContainer} />
            </React.Fragment>
          </Router>
          </div>
        </header>
      </div>
    );
  }
}


const mapStateToProps = state => ({sounds: state.sounds})


export default connect(mapStateToProps)(App)
