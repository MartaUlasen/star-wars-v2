import {
    REQUEST_CHARACTER,
    REQUEST_CHARACTER_SUCCESS,
    REQUEST_CHARACTER_ERROR,
} from 'actions/character';

function character(state = {
    dataById: {}, 
}, { type, payload = {} }) {
    switch (type) {
        case REQUEST_CHARACTER:
            return {
                ...state,
                dataById: {
                    ...state.dataById,
                    [payload.characterId]: {
                        error: null,
                        isLoading: true,
                        data: [],
                    }
                }
            };
        case REQUEST_CHARACTER_SUCCESS:
            return {
                ...state,
                dataById: {
                    ...state.dataById,
                    [payload.characterId]: {
                        error: null,
                        isLoading: false,
                        data: payload.data,
                    }
                }
            };
        case REQUEST_CHARACTER_ERROR:
            return {
                ...state,
                dataById: {
                    ...state.dataById,
                    [payload.characterId]: {
                        error: payload,
                        isLoading: false,
                        data: [],
                    }
                }
            };
        default:
            return state;
    }
}


export default character;
