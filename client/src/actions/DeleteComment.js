// import axios from 'axios';

export const deleteComment = (commentId) => {
console.log(`commentId: ${commentId}`)
  return dispatch => {
    dispatch({type: 'DELETE_COMMENT_START'});

    fetch('/comments/' + commentId, {
       method: 'DELETE',
    })
      .then(response => response.json())
      .then(json => {dispatch({type: 'DELETE_COMMENT_SUCCESS', payload: json})})

  }
}
