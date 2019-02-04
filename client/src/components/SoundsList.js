import React from 'react';
import Sound from './Sound'
import { connect } from 'react-redux';
import { deleteSound } from '../actions/DeleteSound'

class SoundsList extends React.Component {

  renderSounds = (sounds) => {
      return(
        sounds.map(sound =>
        <div key ={sound.id}>
          <Sound sound={sound} delete={this.props.deleteSound}/>
        </div>
      )
    )
  }

  render(){
    return (
      <ul>
        {this.renderSounds(this.props.sounds)}
      </ul>
    )
  }
}

export default connect(null, {deleteSound})(SoundsList);
