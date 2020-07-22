import httpService from 'services';

export const REQUEST_CHARACTER = 'REQUEST_CHARACTER';
export const REQUEST_CHARACTER_SUCCESS = 'REQUEST_CHARACTER_SUCCESS';
export const REQUEST_CHARACTER_ERROR = 'REQUEST_CHARACTER_ERROR';

function requestCharacter(characterId) {
    return {
        type: REQUEST_CHARACTER,
        payload: {
            characterId
        },
    }
}

function requestCharacterSuccess(characterId, data) {
    return {
        type: REQUEST_CHARACTER_SUCCESS,
        payload: {
            characterId,
            data,
        },
    }
}

function requestCharacterError(characterId, error) {
    return {
        type: REQUEST_CHARACTER_ERROR,
        payload: {
            characterId,
            error,
        }
    }
}

function fetchCharacter(characterId) {
    return dispatch => {
        dispatch(requestCharacter(characterId));
        return httpService.get(`people/${characterId}`)
            .then(response => dispatch(
                requestCharacterSuccess(characterId, response.data)
            ))
            .catch(error => dispatch(requestCharacterError(characterId, error)))
    }
}

function shouldFetchCharacter(state, characterId) {
    const character = state.character.dataById[characterId];
    const length = character && character.data;
    const isLoading = character && character.isLoading;

    if (length || isLoading) {
        return false;
    } else {
        return true;
    }
}

export function fetchCharacterIfNeeded(characterId) {
    return (dispatch, getState) => {
        if (shouldFetchCharacter(getState(), characterId)) {
            return dispatch(fetchCharacter(characterId));
        }
    }
}
