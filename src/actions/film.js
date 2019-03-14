import * as fetcher from 'axios';

const axios = fetcher.create({
    baseURL: 'https://swapi.co/api/',
});

export const REQUEST_FILM = 'REQUEST_FILM';
export const REQUEST_FILM_SUCCESS = 'REQUEST_FILM_SUCCESS';
export const REQUEST_FILM_ERROR = 'REQUEST_FILM_ERROR';
export const REQUEST_FILM_CHARACTERS = 'REQUEST_FILM_CHARACTERS';
export const REQUEST_FILM_CHARACTERS_SUCCESS = 'REQUEST_FILM_CHARACTERS_SUCCESS';
export const REQUEST_FILM_CHARACTERS_ERROR = 'REQUEST_FILM_CHARACTERS_ERROR';

function requestFilm() {
    return {
        type: REQUEST_FILM,
    }
}

function requestFilmSuccess(data) {
    return {
        type: REQUEST_FILM_SUCCESS,
        payload: data,
    }
}

function requestFilmError(error) {
    return {
        type: REQUEST_FILM_ERROR,
        payload: error,
    }
}

function requestFilmCharacters() {
    return {
        type: REQUEST_FILM_CHARACTERS,
    }
}

function requestFilmCharactersSuccess(characters) {
    return {
        type: REQUEST_FILM_CHARACTERS_SUCCESS,
        payload: characters,
    }
}

function requestFilmCharactersError(charactersError) {
    return {
        type: REQUEST_FILM_CHARACTERS_ERROR,
        payload: charactersError,
    }
}

function fetchFilmCharacters(urls) {
    return dispatch => {
        dispatch(requestFilmCharacters());

        const characterPromises = urls.map(url =>
            axios.get(url)
        );

        return Promise.all(characterPromises)
            .then(characters => { 
                dispatch(requestFilmCharactersSuccess(characters));
            })
            .catch(error => {
                dispatch(requestFilmCharactersError(error));
            }) 
    }
}

export function fetchFilm(id) {
    return dispatch => {
        dispatch(requestFilm());
        return axios.get(`films/${id}/`)
            .then(response => {
                dispatch(requestFilmSuccess(response.data));
                dispatch(fetchFilmCharacters(response.data.characters));
            })
            .catch(error => dispatch(requestFilmError(error)))
    }
}
