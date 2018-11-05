import React from 'react';


//show extended view of sound: description, comments etc.

const SoundShow = ({sound}) => {

  return(
    <div>
    <p> Sound Name: {sound.name} </p>

    <p> Sound Description: {sound.description} </p>
    </div>

  )
}

export default SoundShow;
