import Axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from './utils';

export const getFeedbackOptions = createAsyncThunk(
    'feedback/getFeedbackOptions',
    async () => {
        const { data } = await Axios.get(
            `${BASE_URL}/Feedbacks/NegativeOptions`
        );

        return data;
    }
);

export const sendFeedback = createAsyncThunk(
    'feedback/sendFeedback',
    async ({ orderID, feedbackTypeID = 0, feedbackID }) => {
        const { data } = await Axios.post(BASE_URL + '/Orders/Feedback', {
            orderId: orderID,
            value: feedbackTypeID,
            negativeFeedbackIds: (feedbackID && [feedbackID]) || [],
        });

        return data;
    }
);
