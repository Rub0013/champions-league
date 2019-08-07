import { all } from 'redux-saga/effects';
import watchPlayers from './players/saga.js';
import watchLeagues from './leagues/saga.js';

export default function* rootSaga() {
    yield all([watchPlayers(), watchLeagues()]);
}
