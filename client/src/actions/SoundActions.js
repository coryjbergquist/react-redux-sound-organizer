
export function fetchSounds() {
  return (dispatch) => {

    dispatch({type: 'LOADING_SOUNDS'})
    fetch('/sounds')
      .then(response => response.json())
      .then(json => {dispatch({type: 'FETCH_SOUNDS', payload: json})

      })
  }
}
