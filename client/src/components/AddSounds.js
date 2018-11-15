import React, {Component} from 'react'
import { connect } from 'react-redux';
import { addSound } from '../actions/AddSounds'

class AddSounds extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
    }
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleDescriptionChange = event => {
    this.setState({
      description: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const { addSound, history } = this.props;
    this.props.addSound(this.state)
    this.setState({
      name: "",
      description: "",
    });
    history.push("/")
  }

  // handleSubmit = event => {
  //   event.preventDefault();
  //   const { addSound, history } = this.props;
  //   addSound(this.state)
  //   this.setState({
  //     name: "",
  //     description: "",
  //   });
  //   history.push('/sounds')
  // }



  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} id="new-sound-form">
          <label>Add Sound: </label>
          <input type="text" onChange={this.handleNameChange} value={this.state.name} />
          <label>Add Description: </label>
          <input type="text" onChange={this.handleDescriptionChange} value={this.state.description} />
          <input type="submit" />
        </form>
        name: {this.state.name}
        description: {this.state.description}
      </div>
    );
  }
};

// const mapDispatchToProps = dispatch => ({
//   addSound: formData => dispatch({ type: 'ADD_SOUND', payload: formData })
// })

export default connect(null, {addSound})(AddSounds);
