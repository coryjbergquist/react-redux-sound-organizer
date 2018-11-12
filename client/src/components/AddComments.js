import React, { Component } from 'react';
import {connect} from 'react-redux';
import {AddComment} from '../actions/AddSounds'

class AddComment extends Component {

  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.AddComment({text: this.state.text, soundId: this.props.soundId });
    this.setState({
      text: '',
    });
  }

  render() {
    return (
     <div>
        <form onSubmit={this.handleOnSubmit} >
          <label>Add Comment</label>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

// const mapDispatchToProps = dispatch => ({
//   addComment: commentData => dispatch({ type: 'ADD_COMMENT', payload: commentData })
// })

export default connect(null, {AddComment})(AddComment);
