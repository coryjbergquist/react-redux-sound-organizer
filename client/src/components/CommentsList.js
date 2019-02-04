import React from 'react';
import { connect } from 'react-redux';
import { deleteComment }from '../actions/DeleteComment'
import { withRouter } from "react-router";



class CommentsList extends React.Component {

  deleteComment = (e) => {
    console.log("deleting comment!")
    this.props.deleteComment(e);
    this.props.history.push(`/sounds/${this.props.soundId}`)
  }

  associatedComments = (comments) => {
    return comments.filter(comment => this.props.soundId === parseInt(comment.sound_id))
  }

  commentList = (comments) => {
    return(
      comments.map(comment =>
        <li key={comment.id}>{comment.text}
          <p>
            <button onClick={() => this.deleteComment(comment)}>DELETE</button>
          </p>
        </li>
      )
    )
  }

  render() {
    return (
      <div>
        {this.commentList(this.associatedComments(this.props.comments))}
      </div>
    );
  }
};
export default withRouter(connect(null, {deleteComment})(CommentsList));
