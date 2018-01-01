import { all, fork } from 'redux-saga/effects';
import gameSaga from './modules/game/gameSaga';

export default function* rootSaga() {
  yield all([
    fork(gameSaga),
  ]);
};
