import {
    REQUEST_FILM,
    REQUEST_FILM_SUCCESS,
    REQUEST_FILM_ERROR,
    REQUEST_FILM_CHARACTERS,
    REQUEST_FILM_CHARACTERS_SUCCESS,
    REQUEST_FILM_CHARACTERS_ERROR
} from 'actions/film';

function film(state = {
    isLoading: false,
    data: [],
    error: null,
    isLoadingCharacters: false,
    characters: [],
    charactersError: null,
}, action) {
    switch (action.type) {
        case REQUEST_FILM:
            return {
                ...state,
                isLoading: true
            };
        case REQUEST_FILM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                data: action.payload,
            }; 
        case REQUEST_FILM_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                data: [],
                characters: [],
            };
        case REQUEST_FILM_CHARACTERS:
            return {
                ...state,
                isLoadingCharacters: true
            };
        case REQUEST_FILM_CHARACTERS_SUCCESS:
            return {
                ...state,
                isLoadingCharacters: false,
                charactersError: null,
                characters: action.payload,
            };
        case REQUEST_FILM_CHARACTERS_ERROR:
            return {
                ...state,
                isLoadingCharacters: false,
                charactersError: action.payload,
                characters: [],
            };
        default:
            return state;
    }
}


export default film;
