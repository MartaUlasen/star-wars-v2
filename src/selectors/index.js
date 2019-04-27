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
