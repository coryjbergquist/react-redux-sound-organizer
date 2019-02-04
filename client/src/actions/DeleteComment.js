// import axios from 'axios';

export const deleteComment = (comment) => {
console.log(`commentId: ${comment.id}`)
  return dispatch => {
    dispatch({type: 'DELETE_COMMENT_START'});

    fetch('/comments/' + comment.id, {
       method: 'DELETE',
    })
      .then(response => response.json())
      .then(json => {dispatch({type: 'DELETE_COMMENT_SUCCESS', payload: json})})

  }
}
