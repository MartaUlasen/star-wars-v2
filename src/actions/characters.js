import * as fetcher from 'axios';
import httpService from 'services';

export const SET_CHRACTERS_PAGE = 'SET_CHRACTERS_PAGE';
export const REQUEST_CHARACTERS = 'REQUEST_CHARACTERS';
export const REQUEST_CHARACTERS_SUCCESS = 'REQUEST_CHARACTERS_SUCCESS';
export const REQUEST_CHARACTERS_ERROR = 'REQUEST_CHARACTERS_ERROR';

function requestCharacters(pageNum) {
    return {
        type: REQUEST_CHARACTERS,
        payload: {
            pageNum
        },
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

function requestCharactersError(error, pageNum) {
    return {
        type: REQUEST_CHARACTERS_ERROR,
        payload: {
            error,
            pageNum,
        }
    }
}

function fetchCharacters(pageNum) {
    return dispatch => {
        dispatch(requestCharacters(pageNum));
        const pathNumber = !pageNum ? '' : `?page=${pageNum}`;
        return httpService.get(`people/${pathNumber}`)
            .then(response => (
                dispatch(requestCharactersSuccess(response.data, pageNum))
            ))
            .catch(error => dispatch(requestCharactersError(error)))
    }
}


function shouldFetchCharacters(state, pageNum) {
    const page = state.characters.dataByPage[pageNum];
    const length = page && page.data.length;
    const isLoading = page && page.isLoading;

    if (length || isLoading) {
        return false;
    } else {
        return true;
    } 
}


export function fetchCharactersIfNeeded(pageNum) {
    return (dispatch, getState) => {
        if (shouldFetchCharacters(getState(), pageNum)) {
            return dispatch(fetchCharacters(pageNum));
        }
    }
}

export function setCharactersPage(pageNum) {
    return {
        type: SET_CHRACTERS_PAGE,
        payload: pageNum,
    }
}
