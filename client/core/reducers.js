import { combineReducers } from 'redux';
import game from './modules/game/gameReducer'

const rootReducer = combineReducers({
  game
});

export default rootReducer;