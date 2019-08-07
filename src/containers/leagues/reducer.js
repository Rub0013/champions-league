import { fromJS, List } from 'immutable';
import {
    ADD_LEAGUE,
    ADD_LEAGUE_SUCCESS,
    ADD_LEAGUE_FAILURE,
    FETCH_LEAGUES,
    FETCH_LEAGUES_FAILURE,
    FETCH_LEAGUES_SUCCESS
} from './types';

export const initialState = fromJS({ leagues: [], page: 1, loading: false, error: null });

export const leaguesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LEAGUE:
            return state.set('loading', true);
        case ADD_LEAGUE_SUCCESS:
            return state.set('loading', false);
        case ADD_LEAGUE_FAILURE:
            return state.merge({ loading: false, error: action.error() });
        case FETCH_LEAGUES:
            return state.set('loading', true);
        case FETCH_LEAGUES_SUCCESS:
            return state.merge({ loading: false, leagues: new List(action.payload) });
        case FETCH_LEAGUES_FAILURE:
            return state.merge({ loading: false, error: action.error() });
        default:
            return state;
    }
};
