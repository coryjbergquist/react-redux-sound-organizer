import React from 'react';
import { connect } from 'react-redux';
import SoundsList from '../components/SoundsList';
import SoundShow from '../components/SoundShow';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SoundShowContainer from './SoundShowContainer'

class SoundsListContainer extends React.Component {



  render() {
    return (
      <div>
        <SoundsList sounds={this.props.sounds} delete={this.props.delete} />
        <Route path={`${this.props.match.url}/:soundId`} component={SoundShowContainer}/>
        <Route exact path={this.props.match.url} render={() => (
        <h3>Please select a sound from the list.</h3>
        )}/>
      </div>
    );
  }

}

const mapStateToProps = state => ({sounds: state.sounds})

const mapDispatchToProps = dispatch => {
  return {
    delete: soundObject => dispatch({type: 'DELETE_SOUND', payload: soundObject })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SoundsListContainer);
