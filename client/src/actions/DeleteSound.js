import axios from 'axios';

export const deleteSound = (soundId) => {
  return dispatch => {
    dispatch({type: 'DELETE_SOUND_START', payload: soundId);
    const data = {id: soundId}
    fetch('/sounds', {
       method: 'DELETE',
       headers: {
         'content-type': 'application/json',
       },
       body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(json => {dispatch({type: 'ADD_SOUND_SUCCESS', payload: json})})
