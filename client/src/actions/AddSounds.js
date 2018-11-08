import axios from 'axios';

export const addSound = (formData) => {
  return dispatch => {
    dispatch(addSoundStarted());

    fetch('sounds/new', {
     method: 'POST',
     data: {
       formData
     }
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
