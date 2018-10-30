export default function soundsReducer(state= {sounds: [{sound1: "pew pew"}, {sound2: "boom boom"}]}, action) {
  switch ( action.type ) {
    case 'LOADING_SOUNDS':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_SOUNDS':
      return {sounds: action.payload}
    default:
      return state;
  }
 }
