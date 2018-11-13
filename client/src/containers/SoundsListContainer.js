import React from 'react';
import { connect } from 'react-redux';
import SoundsList from '../components/SoundsList';
import SoundShow from '../components/SoundShow';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SoundShowContainer from './SoundShowContainer'
import AddSounds from '../components/AddSounds'
import { fetchSounds } from '../actions/SoundActions'
import { deleteSound } from '../actions/DeleteSound'


class SoundsListContainer extends React.Component {

// constructor(props) {
//   super();
//   fetchSounds()
// }


  render() {
    return (
      <div>
      <h3>Please select a sound from the list.</h3>
        <SoundsList sounds={this.props.sounds} delete={this.props.deleteSound} />
        <Switch>

          <Route exact path={`${this.props.match.url}/new`} component={AddSounds} />
          <Route exact path={`${this.props.match.url}/:soundId`} component={SoundShowContainer}/>
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = state => ({sounds: state.sounds})

// const mapDispatchToProps = dispatch => {
//   return {
//     delete: soundId => deleteSound(soundId),
//   }
// }

export default connect(mapStateToProps, {deleteSound})(SoundsListContainer);
