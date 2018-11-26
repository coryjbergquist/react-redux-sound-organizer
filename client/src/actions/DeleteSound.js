// import axios from 'axios';

export const deleteSound = (sound) => {

  return dispatch => {
    dispatch({type: 'DELETE_SOUND_START'});

    fetch('/sounds/' + sound.id, {
       method: 'DELETE',
    })
      .then(response => response.json())
      .then(json => {dispatch({type: 'DELETE_SOUND_SUCCESS', payload: json})})

  }
}
