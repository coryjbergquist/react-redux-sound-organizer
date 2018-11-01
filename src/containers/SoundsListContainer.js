import React from 'react';
import { connect } from 'react-redux';
import  SoundsList  from '../components/SoundsList';

class SoundsListContainer extends React.Component {
  state = { sounds: [] };

    render() {
      return <SoundsList sounds={this.props.sounds} />;
    }
}


const mapStateToProps = state => ({sounds: state.sounds})


export default connect(mapStateToProps)(SoundsListContainer);
