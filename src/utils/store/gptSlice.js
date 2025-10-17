import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieResult: null,
        isLoading: false,
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResults: (state, action) => {
            const { movieNames, movieResult } = action.payload;
            state.movieNames = movieNames;
            state.movieResult = movieResult;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    },
});

export const { toggleGptSearchView, addGptMovieResults, setIsLoading } = gptSlice.actions;

export default gptSlice.reducer;