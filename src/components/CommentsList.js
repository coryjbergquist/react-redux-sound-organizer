import React from 'react';
import { Link } from 'react-router-dom';

const CommentsList = (props) => {
  const renderComments = props.comments.map(comment =>
    <li key={comment.id}>{comment.text}
      <p>
        {/* <button onClick={() => props.delete(comment.id)}>DELETE</button> */}
      </p>
    </li>
  );

  return (
    <ul>
      <span>{renderComments}</span>
    </ul>
  );
};

export default CommentsList;
