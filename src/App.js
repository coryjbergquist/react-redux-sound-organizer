import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import SoundsList from './components/SoundsList';

class App extends Component {
  render() {
    return (
      <div className="App">

      <h1>Here are sounds!</h1>

        <header className="App-header">
          <p>
            {this.props.countDown.countDown}
          </p>
          <p>
            list of sounds
            <SoundsList sounds={this.props.sounds.sound} />
          </p>
          <p>
            {this.props.sounds.cheese}
          </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({ countDown: state.countDown, sounds: state.sounds})


export default connect(mapStateToProps)(App)
