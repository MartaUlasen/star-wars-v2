export const selectCharactersPageData = (state, pageNum) => {
    if (state.dataByPage[pageNum]) {
        return {
            ...state.dataByPage[pageNum]
        };
    } else {
        return {
            data: []
        };
    }
};

export const selectCharacterDataById = (state, id) => {
    if (state.dataById[id]) {
        return {
            ...state.dataById[id]
        };
    } else {
        return {
            data: []
        };
    }
};

export const selectFilmDataById = (state, id) => {
    if (state.dataById[id]) {
        return {
            ...state.dataById[id]
        };
    } else {
        return {
            data: []
        };
    }
};
