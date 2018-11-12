import React from 'react';
import { connect } from 'react-redux';
import  SoundShow  from '../components/SoundShow';
import {fetchComments} from '../actions/FetchComments'

class SoundsPageContainer extends React.Component {
  constructor({sound}) {
    super({sound})
  }
  componentDidMount = () => {
    this.props.fetchComments()
  };


  render() {
    return(

    <div>
      <SoundShow sound={this.props.sound} comments={this.props.comments} />
    </div>

    )
  }
}



//const mapStateToProps = (state, ownProps) => {
  //const sound = state.sounds.find(sound => sound.id === +ownProps.match.params.sound.id)


const mapStateToProps = (state, ownProps) => {

  const sound = state.sounds.sounds.find(sound => sound.id == ownProps.match.params.soundId)
  if (sound) {
    return { sound }
  } else {
    return { sound: {} }
  }

  const comments = state.sounds.comments
}

export default connect(mapStateToProps, {fetchComments})(SoundShow);
