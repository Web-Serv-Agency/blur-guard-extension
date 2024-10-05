import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    socialMedia: {
        whatsApp: false,
        messenger: false,
        telegram: false,
    }
    // rest of the filter things
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        toggleSocialMedia: (state, action) => {
            const { platform } = action.payload;
            state.socialMedia[platform] = !state.socialMedia[platform];
        },
    },
});

export const {
    toggleSocialMedia
} = filterSlice.actions;

export default filterSlice.reducer