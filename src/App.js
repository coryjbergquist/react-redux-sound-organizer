import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">

        <header>
          <p>
            {this.props.cheese.cheese} //why isn't this rendering?
          </p>
          <p>
          {this.props.sounds.sound}
          </p>
          <p>
          {this.props.sounds.cheese}
          </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({ cheese: state.cheese, sounds: state.sounds})


export default connect(mapStateToProps)(App)
