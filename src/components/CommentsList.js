import React from 'react';
import { Link } from 'react-router-dom';

const CommentsList = (props) => {
  const renderComments = props.comments.comments.map(comment =>
    <li key={comment.id}>{comment.text}
      <p>
        //<button onClick={() => props.delete(sound.id)}>DELETE</button>
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
