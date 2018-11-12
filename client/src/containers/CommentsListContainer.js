import React from 'react';
import { connect } from 'react-redux';
import  CommentsList  from '../components/CommentsList';
import AddComments from '../components/AddComments'
import {fetchComments} from '../actions/FetchComments'

class CommentsListContainer extends React.Component {

  componentDidMount() {
   this.props.fetch()
  }

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
            delete={this.props.delete}
          />
        </ul>

      </div>
    );
  }
}

const mapStateToProps = state => ({comments: state.sounds.comments})


const mapDispatchToProps = dispatch => {
  return {
    delete: commentObject => dispatch({type: 'DELETE_COMMENT', payload: commentObject }),
    fetch: commentObject => dispatch(fetchComments())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsListContainer);
