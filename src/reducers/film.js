import {
    REQUEST_FILM,
    REQUEST_FILM_SUCCESS,
    REQUEST_FILM_ERROR,
    REQUEST_FILM_CHARACTERS,
    REQUEST_FILM_CHARACTERS_SUCCESS,
    REQUEST_FILM_CHARACTERS_ERROR
} from 'actions/film';

function film(state = {
    dataById: {},
}, { type, payload = {} }) {
    switch (type) {
        case REQUEST_FILM:
            return {
                ...state,
                dataById: {
                    ...state.dataById,
                    [payload.filmId]: {
                        error: null,
                        isLoading: true,
                        data: [],
                        isLoadingCharacters: false,
                        charactersError: null,
                    }
                }
            };
        case REQUEST_FILM_SUCCESS:
            return {
                ...state,
                dataById: {
                    ...state.dataById,
                    [payload.filmId]: {
                        ...state.dataById[payload.filmId],
                        error: null,
                        isLoading: false,
                        data: payload.data,
                    }
                }
            }; 
        case REQUEST_FILM_ERROR:
            return {
                ...state,
                dataById: {
                    ...state.dataById,
                    [payload.filmId]: {
                        ...state.dataById[payload.filmId],
                        error: payload,
                        isLoading: false,
                        data: [],
                    }
                }
            };
        case REQUEST_FILM_CHARACTERS:
            return {
                ...state,
                dataById: {
                    ...state.dataById,
                    [payload.filmId]: {
                        ...state.dataById[payload.filmId],
                        isLoadingCharacters: true,
                    }
                }
            };
        case REQUEST_FILM_CHARACTERS_SUCCESS:
            return {
                ...state,
                dataById: {
                    ...state.dataById,
                    [payload.filmId]: {
                        ...state.dataById[payload.filmId],
                        isLoadingCharacters: false,
                    }
                }
            };
        case REQUEST_FILM_CHARACTERS_ERROR:
            return {
                ...state,
                dataById: {
                    ...state.dataById,
                    [payload.filmId]: {
                        ...state.dataById[payload.filmId],
                        isLoadingCharacters: false,
                        charactersError: payload.error,
                    }
                }
            };
        default:
            return state;
    }
}


export default film;
