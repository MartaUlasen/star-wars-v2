import {
    SET_CHRACTERS_PAGE,
    REQUEST_CHARACTERS,
    REQUEST_CHARACTERS_SUCCESS,
    REQUEST_CHARACTERS_ERROR,
} from 'actions/characters';

function characters(state = {
    currentPage: 1,
    dataByPage: {},
    count: null,
}, { type, payload = {} }) {
    switch (type) {
        case SET_CHRACTERS_PAGE:
            return {
                ...state,
                currentPage: payload,
            };
        case REQUEST_CHARACTERS:
            return {
                ...state,
                dataByPage: {
                    ...state.dataByPage,
                    [payload.pageNum]: {
                        error: null,
                        loading: true,
                        data: [],
                    },
                },
            };
        case REQUEST_CHARACTERS_SUCCESS:
            return {
                ...state,
                dataByPage: {
                    ...state.dataByPage,
                    [payload.pageNum]: {
                        error: null,
                        loading: false,
                        data: payload.data,
                    },
                },
                count: payload.count,
            };
        case REQUEST_CHARACTERS_ERROR:
            return {
                ...state,
                dataByPage: {
                    ...state.dataByPage,
                    [payload.pageNum]: {
                        error: payload,
                        loading: false,
                        data: [],
                    },
                },
            };
        default:
            return state;
    }
}

export default characters;
