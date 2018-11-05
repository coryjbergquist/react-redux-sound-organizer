import React from 'react';
import { connect } from 'react-redux';
import  SoundShow  from '../components/SoundShow';

const SoundsPageContainer = ({ sound }) =>

<div>
  <SoundShow sound={sound} />
</div>



//const mapStateToProps = (state, ownProps) => {
  //const sound = state.sounds.find(sound => sound.id === +ownProps.match.params.sound.id)


const mapStateToProps = (state, ownProps) => {

  const sound = state.sounds.sounds.find(sound => sound.id == ownProps.match.params.soundId)

  if (sound) {
    return { sound }
  } else {
    return { sound: {} }
  }
}

export default connect(mapStateToProps)(SoundShow);
