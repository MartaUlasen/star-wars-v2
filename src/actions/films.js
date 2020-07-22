import httpService from 'services';

export const REQUEST_FILMS = 'REQUEST_FILMS';
export const REQUEST_FILMS_SUCCESS = 'REQUEST_FILMS_SUCCESS';
export const REQUEST_FILMS_ERROR = 'REQUEST_FILMS_ERROR';

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

function fetchFilms() {
    return dispatch => {
        dispatch(requestFilms());
        return httpService.get('films/')
            .then(response => dispatch(requestFilmsSuccess(response.data)))
            .catch(error => dispatch(requestFilmsError(error)))
    }
}

function shouldFetchFilms(state) {
    const length = state.films.data.length;
    return !length;
}

export function fetchFilmsIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchFilms(getState())) {
            return dispatch(fetchFilms())
        }
    }
}
