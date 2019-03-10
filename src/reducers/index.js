import { combineReducers } from 'redux';
import {
    REQUEST_FILMS,
    REQUEST_FILMS_SUCCESS,
    REQUEST_FILMS_ERROR,
} from 'actions';

function films(state = {
    isLoading: false,
    data: [],
    error: null,
}, action) {
    switch (action.type) {
        case REQUEST_FILMS:
            return {
                ...state,
                isLoading: true
            };
        case REQUEST_FILMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                data: action.payload,
            };
        case REQUEST_FILMS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                data: [],
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    films,
});

export default rootReducer;
