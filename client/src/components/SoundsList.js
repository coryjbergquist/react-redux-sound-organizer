import React from 'react';
import { Link } from 'react-router-dom';
import CommentsListContainer from '../containers/CommentsListContainer'

const SoundsList = (props) => {
console.log("just rendered soundlist")
  const renderSounds = props.sounds.sounds.map(sound =>

    <div key={sound.id}>
      <li key={sound.id}>
      //link to each sound to show description etc.
      <Link key={sound.id} to={`/sounds/${sound.id}`}>{sound.name}</Link>
      <p>
        <button onClick={() => props.delete(sound.id)}>DELETE </button>
      </p>

    </li>
    </div>
  );

  return (
    <ul>
      <h1>Here are sounds!</h1>
      <span>{renderSounds}</span>
    </ul>
  );
};

export default SoundsList;
