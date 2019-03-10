import * as fetcher from 'axios';
const axios = fetcher.create({
    baseURL: 'https://swapi.co/api/',
});

export const REQUEST_FILMS = 'REQUEST_FILMS';
export const REQUEST_FILMS_SUCCESS = 'REQUEST_FILMS_SUCCESS';
export const REQUEST_FILMS_ERROR = 'REQUEST_FILMS_ERROR';

export const REQUEST_CHARACTERS = 'REQUEST_CHARACTERS';
export const RECEIVE_CHARACTERS = 'RECEIVE_CHARACTERS';

function requestFilms() {
    return {
        type: REQUEST_FILMS,
    }
}

function requestFilmsSuccess(data) {
    return {
        type: REQUEST_FILMS_SUCCESS,
        payload: data.results,
    }
}

function requestFilmsError(error) {
    return {
        type: REQUEST_FILMS_ERROR,
        payload: error,
    }
}

export function fetchFilms() {
    return dispatch => {
        dispatch(requestFilms());
        return axios.get('films/')
            .then(response => dispatch(requestFilmsSuccess(response.data)))
            .catch(error => dispatch(requestFilmsError(error)))
    }
}
