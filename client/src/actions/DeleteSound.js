import axios from 'axios';

export const deleteSound = (soundId) => {

  return dispatch => {
    dispatch(deleteSoundStart(soundId));
    const data = {id: soundId}
    fetch('/sounds' + soundId, {
       method: 'DELETE',
       headers: {
         'content-type': 'application/json',
       },
    })
      .then(response => response.json())
      .then(json => {dispatch({type: 'DELETE_SOUND_SUCCESS', payload: json})})

  }
}



const deleteSoundStart = sound => ({
  type: 'DELETE_SOUND_START',
  payload: sound
});