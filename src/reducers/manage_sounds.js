export default function manageSounds(state= {countDown: "Here's the count down:"}, action) {
  switch ( action.type ) {
    case 'LOADING_SOUNDS':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_SOUNDS':
      return {sounds: action.payload}
    default:
      return state;
  }
 }
