import axios from 'axios';

const API_ROOT = 'http://api.lumen.loc';
const PLAYERS_ROOT = `${API_ROOT}/player`;
const LEAGUES_ROOT = `${API_ROOT}/league`;

export const getPlayersList = () => {
    return axios.get(PLAYERS_ROOT);
};

export const addPlayer = (name, team_id) => {
    return axios.post(PLAYERS_ROOT, { name, team_id });
};

export const getLeaguesList = () => {
    return axios.get(LEAGUES_ROOT);
};

export const createLeague = name => {
    return axios.post(LEAGUES_ROOT, { name });
};
