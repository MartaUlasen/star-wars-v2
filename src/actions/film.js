import { fetchCharacterIfNeeded } from 'actions/character';
import httpService from 'services';

export const REQUEST_FILM = 'REQUEST_FILM';
export const REQUEST_FILM_SUCCESS = 'REQUEST_FILM_SUCCESS';
export const REQUEST_FILM_ERROR = 'REQUEST_FILM_ERROR';
export const REQUEST_FILM_CHARACTERS = 'REQUEST_FILM_CHARACTERS';
export const REQUEST_FILM_CHARACTERS_SUCCESS = 'REQUEST_FILM_CHARACTERS_SUCCESS';
export const REQUEST_FILM_CHARACTERS_ERROR = 'REQUEST_FILM_CHARACTERS_ERROR';

const getHrefId = (href) => {
	return href.split('/').filter(function(v){return v;}).pop();
}

function requestFilm(filmId) {
    return {
        type: REQUEST_FILM,
        payload: {
            filmId
        },
    }
}

function requestFilmSuccess(filmId, data, characterIds) {
    return {
        type: REQUEST_FILM_SUCCESS,
        payload: {
            filmId,
            data,
        },
    }
}

function requestFilmError(filmId, error) {
    return {
        type: REQUEST_FILM_ERROR,
        payload: {
            filmId,
            error,
        }
    }
}

function requestFilmCharacters(filmId) {
    return {
        type: REQUEST_FILM_CHARACTERS,
        payload: { filmId },
    }
}

function requestFilmCharactersSuccess(filmId) {
    return {
        type: REQUEST_FILM_CHARACTERS_SUCCESS,
        payload: { filmId },
    }
}

function requestFilmCharactersError(filmId, error) {
    return {
        type: REQUEST_FILM_CHARACTERS_ERROR,
        payload: { filmId, error },
    }
}

function fetchFilmCharacters(filmId, characterIds) {
    return (dispatch, getState) => {
        dispatch(requestFilmCharacters(filmId));

        const characterRequests = characterIds.map(id => fetchCharacterIfNeeded(id)(dispatch, getState));

        return Promise.all(characterRequests)
            .then(data => {
                data.forEach(action => action && dispatch(action));
                dispatch(requestFilmCharactersSuccess(filmId));
            })
            .catch(error => {
                dispatch(requestFilmCharactersError(filmId, error));
            })
    }
}

function fetchFilm(filmId) {
    return dispatch => {
        dispatch(requestFilm(filmId));
        return httpService.get(`films/${filmId}/`)
            .then(response => {
                const characterIds = response.data.characters.map(character => 
                    getHrefId(character)
                );
                dispatch(requestFilmSuccess(filmId, response.data, response.data.characters = characterIds));
                dispatch(fetchFilmCharacters(filmId, characterIds));
            })
            .catch(error => dispatch(requestFilmError(filmId, error)))
    }
}

function shouldFetchFilm(state, filmId) {
    const film = state.film.dataById[filmId];
    const length = film && film.data;
    const isLoading = film && film.isLoading;

    if (length || isLoading) {
        return false;
    } else {
        return true;
    }
}

export function fetchFilmIfNeeded(characterId) {
    return (dispatch, getState) => {
        if (shouldFetchFilm(getState(), characterId)) {
            return dispatch(fetchFilm(characterId))
        }
    }
}
