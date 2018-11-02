import React from 'react';
import { Link } from 'react-router-dom';

const SoundsList = (props) => {
  const renderSounds = props.sounds.sound.map(sound =>
    <li key={sound}>{sound}
      <p>
        <button onClick={() => props.delete(sound)}>DELETE</button>
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
