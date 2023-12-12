import { createSlice } from '@reduxjs/toolkit';
import {
    getFeedbackOptions,
    sendFeedback,
} from '../../../services/feedback.service';

const initialState = {
    feedbackOptionsStatus: 'idle',
    feedbackOptionsError: null,
    feedbackOptionsData: [],
    sendFeedbackStatus: 'idle',
    sendFeedbackError: null,
    sendFeedbackData: [],
};

const feedbackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {
        resetFeedbackValues: () => initialState,
    },
    extraReducers(builder) {
        builder
            .addCase(getFeedbackOptions.pending, (state) => {
                state.feedbackOptionsStatus = 'loading';
            })
            .addCase(getFeedbackOptions.fulfilled, (state, action) => {
                const { data } = action.payload;
                state.feedbackOptionsStatus = 'succeeded';
                state.feedbackOptionsData = data;
            })
            .addCase(getFeedbackOptions.rejected, (state, action) => {
                state.feedbackOptionsStatus = 'failed';
                state.feedbackOptionsError = action.error.message;
            })
            .addCase(sendFeedback.pending, (state) => {
                state.sendFeedbackStatus = 'loading';
            })
            .addCase(sendFeedback.fulfilled, (state, action) => {
                const { data } = action.payload;
                state.sendFeedbackStatus = 'succeeded';
                state.sendFeedbackData = data;
            })
            .addCase(sendFeedback.rejected, (state, action) => {
                state.sendFeedbackStatus = 'failed';
                state.sendFeedbackError = action.error.message;
            });
    },
});

export const { resetFeedbackValues } = feedbackSlice.actions;

export default feedbackSlice.reducer;
