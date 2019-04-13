import * as fetcher from 'axios';
const axios = fetcher.create({
    baseURL: 'https://swapi.co/api/',
});

export const SET_CHRACTERS_PAGE = 'SET_CHRACTERS_PAGE';
export const REQUEST_CHARACTERS = 'REQUEST_CHARACTERS';
export const REQUEST_CHARACTERS_SUCCESS = 'REQUEST_CHARACTERS_SUCCESS';
export const REQUEST_CHARACTERS_ERROR = 'REQUEST_CHARACTERS_ERROR';
function requestCharacters() {
    return {
        type: REQUEST_CHARACTERS,
    }
}

function requestCharactersSuccess(data, pageNum) {
    return {
        type: REQUEST_CHARACTERS_SUCCESS,
        payload: {
            pageNum,
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

function fetchCharacters(pageNum) {
    return dispatch => {
        dispatch(requestCharacters());
        const pathNumber = !pageNum ? '' : `?page=${pageNum}`;
        return axios.get(`people/${pathNumber}`)
            .then(response => (
                dispatch(requestCharactersSuccess(response.data, pageNum))
            ))
            .catch(error => dispatch(requestCharactersError(error)))
    }
}


function shouldFetchCharacters(state, pageNum) {
    const page = state.characters.dataByPage[pageNum]
    if (!page) {
        return true
    } else {
        return false
    } 
}


export function fetchCharactersIfNeeded(pageNum) {
    return (dispatch, getState) => {
        if (shouldFetchCharacters(getState(), pageNum)) {
            return dispatch(fetchCharacters(pageNum))
        }
    }
}

export function setCharactersPage(pageNum) {
    return {
        type: SET_CHRACTERS_PAGE,
        payload: pageNum,
    }
}
