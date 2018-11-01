import React from 'react';
import { Link } from 'react-router-dom';

const SoundsList = ({ sounds }) => {

  const renderSounds = sounds.map(sound =>
    <div key={sound}>{sound}</div>
    //<Link style={{ marginRight: '12px' }} key={sound.id} to={`/pets/${pet.id}`}>{pet.name}</Link>
    //make link to each sound to show description etc.
  );

  return (
    <div>
      {renderSounds}
    </div>
  );
};

export default SoundsList;
