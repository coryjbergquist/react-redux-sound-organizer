import cuid from 'cuid';
export const cuidFn = cuid;

export default function soundsReducer(state= {
  sounds: [],
  soundComments: [],
}, action) {
  switch ( action.type ) {
      //ADD SOUND
      //make action.sound include the new sound object
    case 'ADD_SOUND':
      const sound = {sound: action.payload.sound, id: cuidFn()};
     //return { sound: state.sound.concat(sound.sound) };
      return { ...state, sounds: [...state.sounds, sound]}
//-------------------------------------------------------------------------
      //REMOVE SOUND by filtering all sounds and returning everything
      //except the one that matches
      //will return a new state that doesn't include the matching sound.id
      //must assign an id to all sounds, and create soundIndex?
      //action.id must include the sound id and maybe other stuff?
    case 'DELETE_SOUND':

      const sounds = state.sounds.filter(sound => sound.id !== action.payload);
      return {...state, sounds}

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
