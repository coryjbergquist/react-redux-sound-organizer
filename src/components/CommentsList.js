import React from 'react';
import { Link } from 'react-router-dom';

const CommentsList = (props) => {

  const commentList = props.comments.map(comment =>
    <li key={comment.id}>{comment.text}
      <p>
        {/* <button onClick={() => props.delete(comment.id)}>DELETE</button> */}
      </p>
    </li>
  );

  return (
    <ul>
      
      <span>{commentList}</span>
    </ul>
  );
};

export default CommentsList;
