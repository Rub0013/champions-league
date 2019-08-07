import { combineReducers } from 'redux';
import { playersListReducer } from './players/reducer.js';
import { leaguesReducer } from './leagues/reducer.js';

export default combineReducers({ players: playersListReducer, leagues: leaguesReducer });
