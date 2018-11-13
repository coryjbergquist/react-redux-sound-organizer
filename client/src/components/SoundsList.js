import React from 'react';
import { Link } from 'react-router-dom';
import CommentsListContainer from '../containers/CommentsListContainer'
import Sound from './Sound'

class SoundsList extends React.Component { //= (props) => {
  constructor(props) {
    super(props)
  }

  //adding a Sounds component for each sound props
  renderSounds = this.props.sounds.sounds.map((sound) =>
    <Sound sound={sound}/>
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


export default SoundsList;
