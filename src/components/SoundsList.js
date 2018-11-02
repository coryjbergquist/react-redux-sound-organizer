import React from 'react';
import { Link } from 'react-router-dom';

const SoundsList = (props) => {
  const renderSounds = props.sounds.sounds.map(sound =>
    <li key={sound.id}>{sound.name}
      <p>
        <button onClick={() => props.delete(sound.id)}>DELETE</button>
      </p>
    </li>
    //<Link style={{ marginRight: '12px' }} key={sound.id} to={`/pets/${pet.id}`}>{pet.name}</Link>
    //make link to each sound to show description etc.
  );

  return (
    <ul>
      <span>{renderSounds}</span>
    </ul>
  );
};

export default SoundsList;
