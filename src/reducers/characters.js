import {
    SET_CHRACTERS_PAGE,
    REQUEST_CHARACTERS,
    REQUEST_CHARACTERS_SUCCESS,
    REQUEST_CHARACTERS_ERROR,
} from 'actions/characters';

function characters(state = {
    currentPage: 1,
    isLoading: false,
    dataByPage: {},
    count: null,
    error: null,
}, { type, payload = {} }) {
    switch (type) {
        case SET_CHRACTERS_PAGE:
            return {
                ...state,
                currentPage: payload,
                isLoading: false,
                error: null,
            };
        case REQUEST_CHARACTERS:
            return {
                ...state,
                isLoading: true,
            };
        case REQUEST_CHARACTERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                dataByPage: {
                    ...state.dataByPage,
                    [payload.pageNum]: payload.data,
                },
                count: payload.count,
            };
        case REQUEST_CHARACTERS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: payload,
            };
        default:
            return state;
    }
}


export default characters;
