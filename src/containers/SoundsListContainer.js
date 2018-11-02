import React from 'react';
import { connect } from 'react-redux';
import  SoundsList  from '../components/SoundsList';

class SoundsListContainer extends React.Component {

  render() {
    return <SoundsList sounds={this.props.sounds} delete={this.props.delete} />;
  }

}

const mapStateToProps = state => ({sounds: state.sounds})

const mapDispatchToProps = dispatch => {
  return {
    delete: soundObject => dispatch({type: 'DELETE_SOUND', payload: soundObject })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SoundsListContainer);
