import cuid from 'cuid';
export const cuidFn = cuid;

export default function soundsReducer(state= {
  sounds: [],
  comments: [],
  loading: false,
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
      action.payload.map(sound => console.log(`hi there ${sound.name}`))

      const apiSounds = action.payload.map(sound => sound)

        return { loading: false, ...state, sounds: apiSounds}



    case 'ADD_SOUND_STARTED':
    
      console.log("started to add sound")
      return {
        ...state,
        loading: true
    };
    case 'ADD_SOUND_SUCCESS':

      console.log(`Successfully added sound! ${action.payload}`)
      return {
        loading: false, ...state, sounds: [...state.sounds, action.payload]
    }

    case 'ADD_SOUND_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    case 'DELETE_SOUND_START':
    debugger
      return {
        ...state, loading: true,
    }

    case 'DELETE_SOUND_SUCCESS':
      return {
        loading: false, ...state, sounds: [...state.sounds, action.payload]
      }



    default:
      return state;
  }
 }
