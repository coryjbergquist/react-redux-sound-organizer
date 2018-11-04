import React from 'react';
import { connect } from 'react-redux';
import  SoundPage  from '../components/SoundPage';

class SoundsPageContainer extends React.Component {

  render() {
    return <SoundPage sounds={this.props.sounds} countDown={this.props.countDown} />;
  }

}

//const mapStateToProps = (state, ownProps) => {
  //const sound = state.sounds.find(sound => sound.id === +ownProps.match.params.sound.id)

export default connect(mapStateToProps)(SoundsListContainer);
