export default function manageSounds(state= {cheese: "this is yum"}, action) {
  switch ( action.type ) {
    case 'LOADING_SOUNDS':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_SOUNDS':
      return {sounds: action.payload}
    default:
      return state;
  }
 }
