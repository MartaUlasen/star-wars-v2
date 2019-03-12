import {
    REQUEST_CHARACTERS,
    REQUEST_CHARACTERS_SUCCESS,
    REQUEST_CHARACTERS_ERROR,
} from 'actions/characters';

function characters(state = {
    isLoading: false,
    data: [],
    count: null,
    error: null,
}, action) {
    switch (action.type) {
        case REQUEST_CHARACTERS:
            return {
                ...state,
                isLoading: true
            };
        case REQUEST_CHARACTERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                data: action.payload.data,
                count: action.payload.count,
            };
        case REQUEST_CHARACTERS_ERROR:
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


export default characters;
