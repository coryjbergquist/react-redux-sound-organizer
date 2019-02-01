import React from 'react';
import { connect } from 'react-redux';
import  CommentsList  from '../components/CommentsList';
import AddComments from '../components/AddComments'
import {fetchComments} from '../actions/FetchComments'
import {deleteComment} from '../actions/DeleteComment'


class CommentsListContainer extends React.Component {

  // componentDidMount() {
  //  this.props.fetchComments()
  // }

  render() {
    return (

      <div>
        <AddComments
          addComment={this.props.addComment}
          soundId={this.props.sound.id}
        />

        <ul>
        Comments:
          <CommentsList
            comments={this.props.comments}
            soundId={this.props.sound.id}
            delete={this.props.deleteComment}
          />
        </ul>

      </div>
    );
  }
}

const mapStateToProps = state => ({comments: state.sounds.comments})


// const mapDispatchToProps = dispatch => {
//   return {
//     delete: commentObject => dispatch(deleteComment()),
//     fetch: commentObject => dispatch(fetchComments())
//   }
// }

const bindActionsToDispatch = dispatch =>
(
  {
    fetchComments : () => dispatch(fetchComments()),
    // deleteComment : () => dispatch(deleteComment())
  }
);

export default connect(mapStateToProps, bindActionsToDispatch)(CommentsListContainer);
