import React from 'react';
import { Link } from 'react-router-dom';

const SoundPage = ({ sounds }) => {

  const renderSound = sounds.sound.map(sound =>
    <div key={sound}>{sound}</div>
    //show title, description of sound
  );

  return (
    <div>

      <div>

        {renderSounds}

      </div>

    </div>
  );
};

export default SoundsList;
