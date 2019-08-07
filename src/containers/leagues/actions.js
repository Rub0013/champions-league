import { ADD_LEAGUE, FETCH_LEAGUES } from './types';

export const addLeague = payload => ({
    type: ADD_LEAGUE,
    payload
});

export const getLeaguesList = () => ({
    type: FETCH_LEAGUES
});
