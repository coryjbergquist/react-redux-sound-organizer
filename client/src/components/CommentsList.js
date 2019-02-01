import React from 'react';
import { connect } from 'react-redux';
import { deleteComment }from '../actions/DeleteComment'


class CommentsList extends React.Component {

  deleteComment = (e) => {
    console.log("deleting comment!")
    // const { history } = this.props;
    this.props.deleteComment(e);
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
export default connect(null, {deleteComment})(CommentsList);
