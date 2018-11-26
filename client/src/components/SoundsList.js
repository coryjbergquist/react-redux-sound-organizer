import React from 'react';
// import { Link } from 'react-router-dom';
// import CommentsListContainer from '../containers/CommentsListContainer'
import Sound from './Sound'
import { connect } from 'react-redux';
import { deleteSound } from '../actions/DeleteSound'



class SoundsList extends React.Component {



  //adding a Sounds component for each sound props
  renderSounds = this.props.stateSounds.sounds.map((sound) =>
  <div>
    <Sound sound={sound} delete={this.props.deleteSound}/>
    </div>
  )

  render(){
    return (
      <ul>
        <h1>Here are sounds!</h1>

        {this.renderSounds}

      </ul>
    )
  }
}

const mapStateToProps = state => ({stateSounds: state.sounds})

export default connect(mapStateToProps, {deleteSound})(SoundsList);
