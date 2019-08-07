import { call, put, all, takeLatest } from 'redux-saga/effects';
import { ADD_PLAYER, ADD_PLAYER_SUCCESS, ADD_PLAYER_FAILURE } from './types';
import { getPlayersList } from '../../services/api';

// worker Saga: will be fired on FETCH_PLAYERS actions
function* fetchPlayers() {
    try {
        const players = yield call(getPlayersList);
        yield put({ type: FETCH_PLAYERS_SUCCESS, players });
    } catch (e) {
        yield put({ type: FETCH_PLAYERS_FAILURE, message: e.message });
    }
}

export default function* watchPlayers() {
    yield all([takeLatest(FETCH_PLAYERS, fetchPlayers)]);
}
