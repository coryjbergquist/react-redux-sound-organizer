import React from 'react';
import { Link } from 'react-router-dom';

const SoundsList = ({ sounds, countDown }) => {

  const renderSounds = sounds.sound.map(sound =>
    <div key={sound}>{sound}</div>
    //<Link style={{ marginRight: '12px' }} key={sound.id} to={`/pets/${pet.id}`}>{pet.name}</Link>
    //make link to each sound to show description etc.
  );

  const renderCountDown = countDown.countDown

  return (
    <div>
      <div>
        {renderSounds}

      </div>
      <div>
        {renderCountDown}
      </div>
    </div>
  );
};

export default SoundsList;
