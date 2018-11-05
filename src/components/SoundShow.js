import React from 'react';


//show extended view of sound: description, comments etc.

const SoundShow = ({sound}) => {

  return(
    <div>
    {sound.name}: {sound.description}
      <h2>count it down for the deetz</h2>
    </div>

  )
}

export default SoundShow;
