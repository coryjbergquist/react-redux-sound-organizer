import React from 'react';
import { Link } from 'react-router-dom';

const SoundsList = (props) => {

  const renderSounds = props.sounds.sound.map(sound =>
    <li key={sound}>{sound}</li>
    //<Link style={{ marginRight: '12px' }} key={sound.id} to={`/pets/${pet.id}`}>{pet.name}</Link>
    //make link to each sound to show description etc.
  );

  const renderCountDown = props.countDown.countDown

  return (
    <ul>
      <span>{renderSounds}</span> <button onClick={() => props.delete(props.sound)}>DELETE</button>
    </ul>
  );
};

export default SoundsList;
