import axios from 'axios';

export const addSound = (formData) => {
  return dispatch => {
    dispatch(addSoundStarted());
    const data = {name: formData.name, description: formData.description}
    fetch('/sounds', {
     method: 'POST',
     headers: {
       'content-type': 'application/json',
     },
     body: JSON.stringify(data)

   })
      .then(res => {
        
        dispatch(addSoundSuccess(res.data));
      })
      .catch(err => {
        dispatch(addSoundFailure(err.message));
      });
  };
};

const addSoundSuccess = sound => ({
  type: 'ADD_SOUND_SUCCESS',
  payload: {
    ...sound
  }
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
