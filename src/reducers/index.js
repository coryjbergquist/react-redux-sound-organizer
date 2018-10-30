import { combineReducers } from 'redux';
import soundsReducer from './sounds_reducer'

const rootReducer = combineReducers({
  cheese: "yes please",
  sounds: soundsReducer
})


export default rootReducer;
