import { takeLatest, all, put, select, take } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { constants } from '../../../core/constants';
import {
  endGame,
  increaseScore,
  recordShownSquare,
  setActiveSquare,
  startNextRound
} from './gameActions';

function* onShowNextSequence() {
  const { game } = yield select();
  const sequenceLength = constants.config.initialSequenceLength + game.get('round') - 1;

  for (let i = 0; i < sequenceLength; i++) {
    yield delay(500);
    const squareIndex = Math.floor(Math.random() * constants.config.squares.length);
    yield put(recordShownSquare(squareIndex));
    yield put(setActiveSquare(squareIndex));
    yield delay(500);
    yield put(setActiveSquare(null));
  }

  yield onEndShowingSequence();
}

function* onEndShowingSequence() {
  const { game } = yield select();
  const sequenceLength = constants.config.initialSequenceLength + game.get('round') - 1;

  for (let i = 0; i < sequenceLength; i++) {
    const action = yield take(constants.game.GUESS_SEQUENCE_SQUARE);

    const correctAnswer = game.getIn(['roundSequence', i]);
    const guess = action.payload.squareIndex;

    if (correctAnswer !== guess) {
      return yield put(endGame());
    }

    yield put(increaseScore());
  }

  yield put(startNextRound());
}

export default function* gameSaga() {
  yield all([
    takeLatest(constants.game.SHOW_NEXT_SEQUENCE, onShowNextSequence),
  ]);
}