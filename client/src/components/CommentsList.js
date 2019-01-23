import React from 'react';
// import { withRouter } from 'react-router-dom';

// const CommentsList = (props) => {
//
//   let associatedComments = props.comments.filter(comment => props.soundId === parseInt(comment.sound_id))
//
//   const commentList = associatedComments.map(comment =>
//     <li key={comment.id}>{comment.text}
//       <p>
//        <button onClick={() => props.delete(comment.id)}>DELETE</button>
//       </p>
//     </li>
//   );
//
//
//   return (
//     <div>
//       {commentList}
//     </div>
//   );
// };
//
// export default CommentsList;
//

class CommentsList extends React.Component {

  onClick = (e) => {
    console.log("deleting!")
    // const { history } = this.props;
    this.props.delete(e);

  }

  associatedComments = this.props.comments.filter(comment => this.props.soundId === parseInt(comment.sound_id))

  commentList = this.associatedComments.map(comment =>
    <li key={comment.id}>{comment.text}
      <p>
        <button onClick={this.onClick(comment.id)}>DELETE</button>
      </p>
    </li>
  )

  render() {

    // const commentList = associatedComments.map(comment =>
    // <li key={comment.id}>{comment.text}
    //   <p>
    //     <button onClick={this.onClick(comment.id)}>DELETE</button>
    //   </p>
    // </li>
  // );

    return (
      <div>
        {this.commentList}
      </div>
    );
  }
};
export default CommentsList;
