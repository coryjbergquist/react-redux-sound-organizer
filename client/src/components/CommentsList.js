import React from 'react';
import { Link } from 'react-router-dom';

const CommentsList = (props) => {
  const myComments = props.comments.comments[0]

  let associatedComments = myComments.filter(comment => props.soundId === parseInt(comment.sound_id))

  const commentList = associatedComments.map(comment =>
    <li key={comment.id}>{comment.text}
      <p>
       <button onClick={() => props.delete(comment.id)}>DELETE</button>
      </p>
    </li>
  );


  return (
    <div>
      {commentList}
    </div>
  );
};

export default CommentsList;
