import React from 'react';
import { Link } from 'react-router-dom';

const SoundsList = ({ sounds }) => {
  const renderSounds = sounds.map(sound =>
    sound
    //<Link style={{ marginRight: '12px' }} key={sound.id} to={`/pets/${pet.id}`}>{pet.name}</Link>
  );

  return (
    <div>
      {renderSounds}
    </div>
  );
};

export default SoundsList;
