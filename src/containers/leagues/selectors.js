import { createSelector } from 'reselect';
import { initialState } from './reducer';

const leaguesState = state => state.leagues || initialState;

export const selectLeagues = () =>
    createSelector(
        leaguesState,
        state =>
            state
                .get('leagues')
                .toJS()
                .map(league => ({
                    key: league.id,
                    name: league.name,
                    teams: []
                }))
    );

export const selectLoading = () =>
    createSelector(
        leaguesState,
        activity => activity.get('loading')
    );
