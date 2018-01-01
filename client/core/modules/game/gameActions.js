import { constants } from '../../constants';

export const recordShownSquare = (squareIndex) => {
  return {
    type: constants.game.RECORD_SHOWN_SQUARE,
    payload: {
      squareIndex
    }
  }
};

export const setActiveSquare = (squareIndex) => {
  return {
    type: constants.game.SET_ACTIVE_SQUARE,
    payload: {
      squareIndex
    }
  }
};

export const showNextSequence = () => {
  return {
    type: constants.game.SHOW_NEXT_SEQUENCE
  }
};

export const guessSequenceSquare = (index) => {
  return {
    type: constants.game.GUESS_SEQUENCE_SQUARE,
    payload: {
      squareIndex: index
    }
  }
};

export const startNextRound = () => {
  return {
    type: constants.game.START_NEXT_ROUND
  }
};

export const startNewGame = () => {
  return {
    type: constants.game.START_NEW_GAME
  }

};

export const endGame = () => {
  return {
    type: constants.game.END_GAME
  }
};

export const increaseScore = () => {
  return {
    type: constants.game.INCREASE_SCORE
  }
};
