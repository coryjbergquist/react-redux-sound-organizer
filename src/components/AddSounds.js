import React, {Component} from 'react'
import { connect } from 'react-redux';

class AddSounds extends Component {

  constructor() {
    super();
    this.state = {
      sound: ""
    }
  }

  handleChange = event => {
    this.setState({
      sound: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addSound(this.state)
    this.setState({
      sound: ""
    });
  }



  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Sound: </label>
          <input type="text" onChange={this.handleChange} value={this.state.sound} />
          <input type="submit" />
        </form>
        {this.state.sound}
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  addSound: formData => dispatch({ type: 'ADD_SOUND', payload: formData })
})

export default connect(null, mapDispatchToProps)(AddSounds);
