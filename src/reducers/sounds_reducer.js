import cuid from 'cuid';
export const cuidFn = cuid;

export default function soundsReducer(state= {
  sounds: [],
  comments: [],
}, action) {
  switch ( action.type ) {
      //ADD_SOUND
      //make action.sound include the new sound object
      //eventually includes sound file
    case 'ADD_SOUND':
      const sound = {name: action.payload.name, description: action.payload.description, id: cuidFn()};
      return { ...state, sounds: [...state.sounds, sound]}

    case 'DELETE_SOUND':
      const sounds = state.sounds.filter(sound => sound.id !== action.payload);
      return {...state, sounds}

      //connect comment to sound through soundId
    case 'ADD_COMMENT':
      const comment = { text: action.payload.text, soundId: action.payload.soundId, id: cuidFn() };
      return { ...state,
        comments: [...state.comments, comment]
    }

    case 'DELETE_COMMENT':
      const comments = state.comments.filter(comment => comment.id !== action.payload);
      return {...state, comments}


      //creating loading bar to show when loading sounds until complete
    case 'LOADING_SOUNDS':
      return Object.assign({}, state, {loading: true})
      //fetch the sounds
    case 'FETCH_SOUNDS':
      return {sounds: action.payload}
    default:
      return state;
  }
 }
