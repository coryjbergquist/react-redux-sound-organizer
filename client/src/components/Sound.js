import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
// import CommentsListContainer from '../containers/CommentsListContainer'
// import SoundsList from './SoundsList'

class Sound extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      num: 0
    }
  }

onClick = () => {
  console.log("deleting!")
  const { history } = this.props;
  this.props.delete(this.props.sound);
  history.push("/")

}

  render(){

    return (
      <li key={this.props.sound.id}>

      <Link key={this.props.sound.id} to={`/sounds/${this.props.sound.id}`} style={{ color: 'grey' }}>{this.props.sound.name}</Link>
      <p>
      <button onClick={this.onClick}>DELETE </button>



      </p>
    </li>
    );
  }
};


export default withRouter(Sound);
