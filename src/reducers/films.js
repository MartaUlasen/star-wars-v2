import {
    REQUEST_FILMS,
    REQUEST_FILMS_SUCCESS,
    REQUEST_FILMS_ERROR,
} from 'actions/films';

function films(state = {
    loading: false,
    data: [],
    error: null,
}, action) {
    switch (action.type) {
        case REQUEST_FILMS:
            return {
                ...state,
                loading: true,
            };
        case REQUEST_FILMS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload,
            };
        case REQUEST_FILMS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: [],
            };
        default:
            return state;
    }
}

export default films;
