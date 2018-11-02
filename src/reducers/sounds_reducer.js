export default function soundsReducer(state= {sound: ["boom", "bam"]}, action) {
  switch ( action.type ) {
      //ADD SOUND
      //make action.sound include the new sound object
    case 'ADD_SOUND':
     return { sound: state.sound.concat(action.payload.sound) };
      // return {
      //   ...state,
      //   sound: [
      //     ...state.sound,
      //     action.sound
      //   ]
      // };

      //REMOVE SOUND by filtering all sounds and returning everything
      //except the one that matches
      //will return a new state that doesn't include the matching sound.id
      //must assign an id to all sounds, and create soundIndex?
      //action.id must include the sound id and maybe other stuff?
    case 'DELETE_SOUND':
      // const soundIndex = state.sounds.findIndex(sound => sound.id === action.id);
      // return {
      //   ...state,
      //   sound: [
      //     ...state.sound.slice(0, soundIndex),
      //     ...state.sound.slice(soundIndex +1)
      //   ]
      // };
      return {sound: state.sound.filter(sound => sound !== action.payload)}

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
