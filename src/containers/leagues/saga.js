import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
    ADD_LEAGUE,
    ADD_LEAGUE_SUCCESS,
    ADD_LEAGUE_FAILURE,
    FETCH_LEAGUES,
    FETCH_LEAGUES_FAILURE,
    FETCH_LEAGUES_SUCCESS
} from './types';
import { getLeaguesList, createLeague } from '../../services/api';

function* fetchLeagues() {
    try {
        const leagues = yield call(getLeaguesList);
        yield put({ type: FETCH_LEAGUES_SUCCESS, payload: leagues.data });
    } catch (e) {
        yield put({ type: FETCH_LEAGUES_FAILURE, message: e.message });
    }
}

function* addLeague(action) {
    try {
        const leagueAdded = yield call(createLeague, action.payload.name);
        yield put({ type: ADD_LEAGUE_SUCCESS, leagueAdded });
    } catch (e) {
        yield put({ type: ADD_LEAGUE_FAILURE, message: e.message });
    }
}

export default function* watchLeagues() {
    yield all([takeLatest(FETCH_LEAGUES, fetchLeagues)]);
    yield all([takeLatest(ADD_LEAGUE, addLeague)]);
}
