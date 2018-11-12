import React from 'react';
import { Link } from 'react-router-dom';

const CommentsList = (props) => {
debugger
  const associatedComments = props.comments[0].filter(comment => props.soundId === comment.soundId);

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
