import React from 'react';
import { connect } from 'react-redux';
import SoundsList from '../components/SoundsList';
import { Route } from 'react-router-dom';
import { fetchSounds } from '../actions/SoundActions';
import { deleteSound } from '../actions/DeleteSound';
import {fetchComments } from '../actions/FetchComments';


class SoundsListContainer extends React.Component {

  render() {
    return (
      <div>
      <h3>Please select a sound from the list.</h3>
        <SoundsList sounds={this.props.sounds} />
      </div>
    );
  }

}

const mapStateToProps = state => ({sounds: state.sounds.sounds})

// const mapDispatchToProps = dispatch => {
//   return {
//     delete: soundId => deleteSound(soundId),
//   }
// }

export default connect(mapStateToProps, {deleteSound, fetchSounds, fetchComments})(SoundsListContainer);
