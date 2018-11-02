import React from 'react';
import { connect } from 'react-redux';
import  CommentsList  from '../components/CommentsList';
import AddComments from '../components/AddComments'

class CommentsListContainer extends React.Component {

  render() {

    return (

      <div>
        <AddComments
          addComment={this.props.addComment}
          soundId={this.props.sound.id}
        />


        <CommentsList
          comments={this.props.comments}
          // soundId={this.props.sound.id}
          delete={this.props.delete}
        />

      </div>
    );
  }
}

const mapStateToProps = state => ({comments: state.sounds.comments})


const mapDispatchToProps = dispatch => {
  return {
    delete: soundObject => dispatch({type: 'DELETE_SOUND', payload: soundObject })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsListContainer);
