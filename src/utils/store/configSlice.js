import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        lang: "en",
        playMovieView: false,
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload;
        },
        togglePlayMovieView: (state) => {
            state.playMovieView = !state.playMovieView;
        }
    },
});

export const { changeLanguage, togglePlayMovieView } = configSlice.actions;
export default configSlice.reducer;
