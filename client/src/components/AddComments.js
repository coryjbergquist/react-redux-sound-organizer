import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addComment} from '../actions/AddComments'
import { withRouter } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
    const { history } = this.props;
    this.props.addComment({text: this.state.text, soundId: this.props.soundId });
    this.setState({
      text: '',
    });
    history.push(`/sounds`)
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

export default withRouter(connect(null, {addComment})(AddComment));
