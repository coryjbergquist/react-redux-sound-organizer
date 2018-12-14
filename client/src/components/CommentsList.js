import React from 'react';

const CommentsList = (props) => {

  const myComments = props.comments

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
