export const selectCharactersPageData = (state, pageNum) => {
    if (state.dataByPage[pageNum]) {
        return {
            ...state.dataByPage[pageNum],
        };
    }
    return {
        data: [],
    };
};

export const selectCharacterDataById = (state, id) => {
    if (state.dataById[id]) {
        return {
            ...state.dataById[id],
        };
    }
    return {
        data: [],
    };
};

export const selectFilmDataById = (state, id) => {
    if (state.dataById[id]) {
        return {
            ...state.dataById[id],
        };
    }
    return {
        data: [],
    };
};
