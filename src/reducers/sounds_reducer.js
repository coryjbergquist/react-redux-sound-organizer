export default function soundsReducer(state= {sound: "boom"}, action) {
  switch ( action.type ) {
    case 'LOADING_SOUNDS':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_SOUNDS':
      return {sounds: action.payload}
    default:
      return state;
  }
 }
