import React from 'react';
import CommentsListContainer from '../containers/CommentsListContainer'


//show extended view of sound: description, comments etc.

const SoundShow = ({sound}) => {

  return(
    <div>
    <p> Sound Name: {sound.name} </p>

    <p> Sound Description: {sound.description} </p>

    <p> <CommentsListContainer sound={sound}/> </p>
    </div>

  )
}

export default SoundShow;
