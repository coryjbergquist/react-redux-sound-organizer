import React from 'react';
import { Link } from 'react-router-dom';

const SoundPage = ({ sounds }) => {
//show extended view of sound: description, comments etc. 
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
