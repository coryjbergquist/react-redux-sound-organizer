import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import SoundsListContainer from './containers/SoundsListContainer';

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
          <p>
            {this.props.countDown.countDown}
          </p>
          <p>
            This is just plain text in a p tag.
          </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({ countDown: state.countDown})


export default connect(mapStateToProps)(App)
