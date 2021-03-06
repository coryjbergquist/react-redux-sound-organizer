// import axios from 'axios';

export const addComment = (formData) => {
  return dispatch => {

    dispatch(addCommentStarted(formData));
    const data = {text: formData.text, soundId: formData.soundId}
    fetch('/comments', {
       method: 'POST',
       headers: {
         'content-type': 'application/json',
       },
       body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(json => {dispatch({type: 'ADD_COMMENT_SUCCESS', payload: json})})


      //.then(res => res.json())

      // .catch(err => {
      //   dispatch(addSoundFailure(err.message));
      // })
  };
};



const addCommentStarted = () => ({
  type: 'ADD_COMMENT_STARTED'
});
