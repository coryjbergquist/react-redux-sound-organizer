import React from 'react';
import { connect } from 'react-redux';

class SoundsListContainer extends React.Component {
  state = { sounds: [] };

    render() {
      return <SoundsList sounds={this.state.sounds} />;
    }
}


const mapStateToProps = state => ({sounds: state.sounds})


export default connect(mapStateToProps)(SoundsListContainer);
