import React from 'react';
import { Link } from 'react-router-dom';

const SoundShow = ({ sounds }) => {
//show extended view of sound: description, comments etc.
  const renderSound = sounds.sound.map(sound =>
    <div key={sound}>{sound}</div>
    //show title, description of sound
  );

  return (
    <div>

      <div>
        Showing the sound deet
        {renderSound}

      </div>

    </div>
  );
};

export default SoundShow;
