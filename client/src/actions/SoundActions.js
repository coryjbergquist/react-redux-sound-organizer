export function fetchSounds() {
  return function(dispatch){
    dispatch({type: 'LOADING_SOUNDS'})
    return fetch('http://localhost:4000/db')
      .then(response => {return response.json()})
      .then(response => {dispatch({type: 'FETCH_SOUNDS', payload: response.images})
    })
  }
}
