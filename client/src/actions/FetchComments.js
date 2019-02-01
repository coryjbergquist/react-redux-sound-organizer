
export function fetchComments() {

  return (dispatch) => {

    dispatch({type: 'LOADING_COMMENTS'})
    fetch('/comments')
      .then(response => response.json())
      .then(json => {dispatch({type: 'FETCH_COMMENTS', payload: json})
      })
  }
}
