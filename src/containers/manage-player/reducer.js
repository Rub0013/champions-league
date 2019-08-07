import { fromJS } from 'immutable';
import { FETCH_PLAYERS, FETCH_PLAYERS_FAILURE, FETCH_PLAYERS_SUCCESS, RESET_PLAYERS } from './types';

const initialState = fromJS({ payload: [], isLoading: false, error: {} });

export const playersListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PLAYERS:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_PLAYERS_SUCCESS:
            return {
                ...state,
                payload: action.payload,
                isLoading: false
            };
        case FETCH_PLAYERS_FAILURE:
            return {
                ...state,
                error: action.error,
                isLoading: false
            };

        case RESET_PLAYERS:
            return { ...state, ...initialState };
        default:
            return state;
    }
};
