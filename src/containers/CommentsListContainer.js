import React from 'react';
import { connect } from 'react-redux';
import  CommentsList  from '../components/CommentsList';

class CommentsListContainer extends React.Component {

  render() {
    debugger
    return <CommentsList comments={props.comments} delete={this.props.delete} />;
  }

}

const mapStateToProps = state => ({comments: state.comments})

const mapDispatchToProps = dispatch => {
  return {
    delete: soundObject => dispatch({type: 'DELETE_SOUND', payload: soundObject })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsListContainer);
