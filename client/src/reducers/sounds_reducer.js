import cuid from 'cuid';
export const cuidFn = cuid;

export default function soundsReducer(state= {
  sounds: [],
  comments: [],
  loading: false,
}, action) {
  switch ( action.type ) {

      // for creating loading bar to show when loading sounds until complete
    case 'LOADING_SOUNDS':
      console.log("loading sounds")
      return Object.assign({}, state, {loading: true})

    case 'FETCH_SOUNDS':
        return { loading: false, ...state, sounds: action.payload}

      //for creating "loading" bar
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
      return {
        ...state, loading: true,
      }

    case 'DELETE_SOUND_SUCCESS':
      return {
        loading: false, ...state, sounds: action.payload
      }

    case 'ADD_COMMENT_STARTED':
      console.log(`started to add comment`)
      return {
        ...state, loading: true
      }

    case 'ADD_COMMENT_SUCCESS':

      const comment = { text: action.payload.text, soundId: action.payload.sound_id, id: action.payload.id };

      console.log(`Successfully added comment! ${comment.text}`)
      return {
        loading: false, ...state, comments: [...state.comments, action.payload]
      }

      case 'LOADING_COMMENTS':
        return { loading: true, ...state }

      case 'FETCH_COMMENTS':
      console.log("comments have been fetched")
        return { loading: false, ...state, comments: action.payload}

      case 'DELETE_COMMENT_START':
        console.log("deleting comment")
        return {
          ...state, loading: true,
        }

        case 'DELETE_COMMENT_SUCCESS':

          return {
            loading: false, ...state, comments: action.payload
          }

    default:
      return state;
  }
 }
