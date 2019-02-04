import React from 'react';
import { connect } from 'react-redux';
import { deleteComment }from '../actions/DeleteComment'
import { withRouter } from "react-router";



class CommentsList extends React.Component {

  deleteComment = (e) => {
    console.log("deleting comment!")
    this.props.deleteComment(e);
    this.props.history.push("/sounds")
  }

  associatedComments = this.props.comments.filter(comment => this.props.soundId === parseInt(comment.sound_id))

  commentList = this.associatedComments.map(comment =>

    <li key={comment.id}>{comment.text}

      <p>
        <button onClick={() => this.deleteComment(comment.id)}>DELETE</button>
      </p>
    </li>
  )

  render() {
    return (
      <div>
        {this.commentList}
      </div>
    );
  }
};
export default withRouter(connect(null, {deleteComment})(CommentsList));
