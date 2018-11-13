import React from 'react';
import { Link } from 'react-router-dom';
import CommentsListContainer from '../containers/CommentsListContainer'
import SoundsList from './SoundsList'

class Sound extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      num: 0
    }
  }

onClick = () => {
  console.log(this.state.num)
  this.setState({num: this.state.num + 1}
  );
}

  render(){

    return (
      <li key={this.props.sound.id}>

      <Link key={this.props.sound.id} to={`/sounds/${this.props.sound.id}`}>{this.props.sound.name}</Link>
      <p>
        <button onClick={() => this.props.delete(this.props.sound.id)}>DELETE </button>
        <button onClick={this.onClick}>LIKE </button>
        {this.state.num}

      </p>
    </li>
    );
  }
};


export default Sound;
