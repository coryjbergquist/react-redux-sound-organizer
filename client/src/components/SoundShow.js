import React from 'react';
import CommentsListContainer from '../containers/CommentsListContainer'



//show extended view of sound: description, comments etc.
const SoundShow = ({sound}) => {
  return(
    <div>
    <h4> Here's more info on your sound! </h4>

    <p> Name: {sound.name} </p>

    <p> Description: {sound.description} </p>

    <div> <CommentsListContainer sound={sound}/> </div>
    </div>

  )
}

export default SoundShow;
