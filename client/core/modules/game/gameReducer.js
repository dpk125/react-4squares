import { Map, List } from 'immutable';
import { constants } from '../../constants';

const initialState = Map({
  round: 1,
  score: 0,
  showingSequence: false,
  activeSquare: null,
  roundSequence: new List([]),
  ended: false
});

const game = (state = initialState, action) => {
  switch (action.type) {
    case constants.game.RECORD_SHOWN_SQUARE:
      return state.updateIn(
        ['roundSequence'],
        sequence => sequence.push(action.payload.squareIndex)
      );
    case constants.game.SET_ACTIVE_SQUARE:
      return state.set('activeSquare', action.payload.squareIndex);
    case constants.game.START_NEXT_ROUND:
      return state
        .set('round', state.get('round') + 1)
        .set('roundSequence', new List([]));
    case constants.game.INCREASE_SCORE:
      return state.set('score', state.get('score') + 1);
    case constants.game.END_GAME:
      return state.set('ended', true);
    case constants.game.START_NEW_GAME:
      return initialState;
    default:
      return state;
  }
};

export default game;