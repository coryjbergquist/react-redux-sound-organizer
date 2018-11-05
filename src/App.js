import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import AddSounds from './components/AddSounds';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import SoundsListContainer from './containers/SoundsListContainer';
import NavBar from './components/NavBar'

import Home from './test';



class App extends Component {
  render() {
    return (

      <div className="App">

        <header className="App-header">
        <div>
        <Router>
          <React.Fragment>
          <NavBar />
            <Route path="/sounds" component={SoundsListContainer} />
          </React.Fragment>
        </Router>
        </div>

        <div>
          <p>list of sounds</p>
        lies
        </div>

        <div>
          <AddSounds />
        </div>

        </header>
      </div>
    );
  }
}


const mapStateToProps = state => ({sounds: state.sounds})


export default connect(mapStateToProps)(App)
