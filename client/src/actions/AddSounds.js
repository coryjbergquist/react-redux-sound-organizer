import axios from 'axios';

export const addSound = (formData) => {
  return dispatch => {
    dispatch(addSoundStarted(formData));
    const data = {name: formData.name, description: formData.description}
    fetch('/sounds', {
       method: 'POST',
       headers: {
         'content-type': 'application/json',
       },
       body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(json => {
        dispatch({type: 'ADD_SOUND_SUCCESS', payload: json})})


      //.then(res => res.json())

      // .catch(err => {
      //   dispatch(addSoundFailure(err.message));
      // })
  };
};

const addSoundSuccess = sound => ({
  type: 'ADD_SOUND_SUCCESS',
  payload: sound
});


const addSoundStarted = () => ({
  type: 'ADD_SOUND_STARTED'
});

const addSoundFailure = error => ({
  type: 'ADD_SOUND_FAILURE',
  payload: {
    error
  }
});
