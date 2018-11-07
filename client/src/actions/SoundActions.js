
export function fetchSounds() {
  return (dispatch) => {

    dispatch({type: 'LOADING_SOUNDS'})
    fetch('sounds')
      .then(response => response.json())
      .then(json => {dispatch({type: 'FETCH_SOUNDS', payload: json})
      console.log(json)
    })
  }
}

//not sure where to send this route and need to get the sounds_reducer action for fetching right.
// function search(query, cb) {
//   return fetch(`api/food?q=${query}`, {
//     accept: "application/json"
//   })
//     .then(checkStatus)
//     .then(parseJSON)
//     .then(cb);
// }
//
// function checkStatus(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   }
//   const error = new Error(`HTTP Error ${response.statusText}`);
//   error.status = response.statusText;
//   error.response = response;
//   console.log(error); // eslint-disable-line no-console
//   throw error;
// }
//
// function parseJSON(response) {
//   return response.json();
// }
