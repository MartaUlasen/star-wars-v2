import * as fetcher from 'axios';
const axios = fetcher.create({
    baseURL: 'https://swapi.co/api/',
});

export const REQUEST_CHARACTERS = 'REQUEST_CHARACTERS';
export const REQUEST_CHARACTERS_SUCCESS = 'REQUEST_CHARACTERS_SUCCESS';
export const REQUEST_CHARACTERS_ERROR = 'REQUEST_CHARACTERS_ERROR';

function requestCharacters() {
    return {
        type: REQUEST_CHARACTERS,
    }
}

function requestCharactersSuccess(data) {
    return {
        type: REQUEST_CHARACTERS_SUCCESS,
        payload: {
            data: data.results,
            count: data.count,
        },
    }
}

function requestCharactersError(error) {
    return {
        type: REQUEST_CHARACTERS_ERROR,
        payload: error,
    }
}

export function fetchCharacters(pageNum) {
    
    return dispatch => {
        dispatch(requestCharacters());
        const pathNumber = !pageNum ? '' : `?page=${pageNum}`;
        return axios.get(`people/${pathNumber}`)
            .then(response => dispatch(
                requestCharactersSuccess(response.data)
            ))
            .catch(error => dispatch(requestCharactersError(error)))
    }
}
