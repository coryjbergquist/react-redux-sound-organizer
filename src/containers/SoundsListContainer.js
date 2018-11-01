import React from 'react';
import { connect } from 'react-redux';
import  SoundsList  from '../components/SoundsList';

class SoundsListContainer extends React.Component {

  render() {
    return <SoundsList sounds={this.props.sounds} countDown={this.props.countDown} />;
  }

}

const mapStateToProps = state => ({sounds: state.sounds, countDown: state.countDown})

export default connect(mapStateToProps)(SoundsListContainer);
