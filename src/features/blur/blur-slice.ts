import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    messenger: {
        profileName: false,
        profilePicture: false,
        lastMessagePreview: false,
        mediaPreview: false,
        chatMessages: false,
        messageTime: false,
    },
    // whatsapp: {
    //     profileName: false,
    //     profilePicture: false,
    //     lastMessagePreview: false,
    //     mediaPreview: false,
    //     allMessages: false,
    //     messageTime: false,
    // },
    // telegram: {
    //     profileName: false,
    //     profilePicture: false,
    //     lastMessagePreview: false,
    //     mediaPreview: false,
    //     allMessages: false,
    //     messageTime: false,
    // }
};

const blurSlice = createSlice({
    name: 'blur',
    initialState,
    reducers: {
        toggleBlurSetting: (state, action) => {
            const { platform, setting } = action.payload;
            if (state[platform] && state[platform][setting] !== undefined) {
                state[platform][setting] = !state[platform][setting];
            }
        },
    },
});

export const {
    toggleBlurSetting
} = blurSlice.actions;

export default blurSlice.reducer

// Selectors for each platform's blur settings
export const selectBlurSettingsByPlatform = (platform) => (state) => state.blur[platform]