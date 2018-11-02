import React from 'react';
import { connect } from 'react-redux';
import  SoundsList  from '../components/SoundsList';

class CommentsListContainer extends React.Component {

  render() {
    return <CommentsList comments={this.props.comments} delete={this.props.delete} />;
  }

}

const mapStateToProps = state => ({comments: state.comments})

const mapDispatchToProps = dispatch => {
  return {
    delete: soundObject => dispatch({type: 'DELETE_SOUND', payload: soundObject })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsListContainer);
