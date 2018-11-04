import React from 'react';
import { Link } from 'react-router-dom';
import CommentsListContainer from '../containers/CommentsListContainer'

const SoundsList = (props) => {

  const renderSounds = props.sounds.sounds.map(sound =>
    //<Link key={sound.id} to={`/sounds/${sound.id}`}>{sound.name}</Link>
    <li key={sound.id}>{sound.name}: {sound.description}
      <p>
        <button onClick={() => props.delete(sound.id)}>DELETE </button>
      </p>
      <p>
        <CommentsListContainer sound={sound}/>
      </p>
    </li>
    //<Link style={{ marginRight: '12px' }} key={sound.id} to={`/pets/${pet.id}`}>{pet.name}</Link>
    //make link to each sound to show description etc.
  );

  return (
    <ul>
      <h1>Here are sounds!</h1>
      <span>{renderSounds}</span>
    </ul>
  );
};

export default SoundsList;
