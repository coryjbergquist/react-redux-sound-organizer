export default function soundsReducer(state= {sound: ["boom", "bam"], cheese: "chickapow.2"}, action) {
  switch ( action.type ) {
      //add new sound
    case 'ADD_SOUND':
      return {sounds: sound}

      //remove sound by filtering all sounds and returning everything
      //except the one that matches
      //will return a new state that doesn't include the matching sound.id
      //must assign an id to all sounds, and create soundIndex? 
    case 'REMOVE_SOUND':
      const allSounds = state.sounds.findIndex(sound => sound.id === action.id);
      return {
        ...state,
        sound: [
          ...state.sound.slice(0, soundIndex),
          ...state.sound.slice(soundIndex +1)
        ]
      };

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
