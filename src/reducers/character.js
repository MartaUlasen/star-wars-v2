import {
    REQUEST_CHARACTER,
    REQUEST_CHARACTER_SUCCESS,
    REQUEST_CHARACTER_ERROR,
} from 'actions/character';

function character(state = {
    isLoading: false,
    data: [],
    error: null,
}, action) {
    switch (action.type) {
        case REQUEST_CHARACTER:
            return {
                ...state,
                isLoading: true
            };
        case REQUEST_CHARACTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                data: action.payload,
            };
        case REQUEST_CHARACTER_ERROR:
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


export default character;
