import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
// import AddSounds from './components/AddSounds';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SoundsListContainer from './containers/SoundsListContainer';
import NavBar from './components/NavBar'
import { fetchSounds } from './actions/SoundActions'
import { fetchComments } from './actions/FetchComments'
import  AddSounds  from './components/AddSounds'
import  SoundShowContainer  from './containers/SoundShowContainer'




class App extends Component {

  componentDidMount() {
   this.props.fetchSounds()
   this.props.fetchComments()
  }


  render() {
    return (
      <div className="App">

        <header className="App-header">
        <div>
          <p>Welcome to this Sound Organizer</p>
        <Router>
          <React.Fragment>
          <NavBar />
          
          <Switch>
            <Route exact path="/sounds/new" component={AddSounds} />
            <Route exact path="/sounds/:soundId" component={SoundShowContainer} />
          </Switch>

          <Route path="/sounds" sounds ={this.props.sounds} component={SoundsListContainer} />

          </React.Fragment>
        </Router>
        </div>

        </header>
      </div>
    );
  }
}


const mapStateToProps = state => ({sounds: state.sounds})

export default connect(mapStateToProps, {fetchSounds, fetchComments})(App)
