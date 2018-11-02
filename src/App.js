import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import SoundsListContainer from './containers/SoundsListContainer';
import AddSounds from './components/AddSounds';

class App extends Component {
  render() {
    return (
      <div className="App">

      <h1>Here are sounds!</h1>

        <header className="App-header">

        <div>
          <p>list of sounds</p>

            <SoundsListContainer />

        </div>

        <div>
          <p>
            This will be an input
          </p>
          <div>
            <AddSounds />
          </div>
        </div>

          <p>
            This is also just plain text in a p tag.
          </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({})


export default connect(mapStateToProps)(App)
