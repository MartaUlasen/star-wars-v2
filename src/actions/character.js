import * as fetcher from 'axios';
const axios = fetcher.create({
    baseURL: 'https://swapi.co/api/',
});

export const REQUEST_CHARACTER = 'REQUEST_CHARACTERS';
export const REQUEST_CHARACTER_SUCCESS = 'REQUEST_CHARACTER_SUCCESS';
export const REQUEST_CHARACTER_ERROR = 'REQUEST_CHARACTER_ERROR';

function requestCharacter() {
    return {
        type: REQUEST_CHARACTER,
    }
}

function requestCharacterSuccess(data) {
    return {
        type: REQUEST_CHARACTER_SUCCESS,
        payload: data,
    }
}

function requestCharacterError(error) {
    return {
        type: REQUEST_CHARACTER_ERROR,
        payload: error,
    }
}

export function fetchCharacter(id) {
    
    return dispatch => {
        dispatch(requestCharacter());
        return axios.get(`people/${id}`)
            .then(response => dispatch(
                requestCharacterSuccess(response.data)
            ))
            .catch(error => dispatch(requestCharacterError(error)))
    }
}
