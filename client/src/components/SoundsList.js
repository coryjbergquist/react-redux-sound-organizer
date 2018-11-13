import React from 'react';
import { Link } from 'react-router-dom';
import CommentsListContainer from '../containers/CommentsListContainer'
import Sound from './Sound'

class SoundsList extends React.Component { //= (props) => {
  constructor(props) {
    super(props)
  }


  renderSounds = this.props.sounds.sounds.map((sound) =>
    <Sound sound={sound}/> //adding a Sounds component for each sound props
  )

// renderSounds = this.props.sounds.sounds.map((sound) =>
// //link to each sound to show description etc.
//       <li key={sound.id}>
//       <Link key={sound.id} to={`/sounds/${sound.id}`}>{sound.name}</Link>
//       <p>
//         <button onClick={() => this.props.delete(sound.id)}>DELETE </button>
//         <button onClick={this.onClick}>LIKE </button>
//
//       </p>
//     </li>
//
//   );

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
