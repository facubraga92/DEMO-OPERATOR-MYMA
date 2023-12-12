import { createSlice } from '@reduxjs/toolkit';
import { addCard, updateCardToken } from '../../../services/card.services';
import { FAILED, IDLE, LOADING, SUCCEEDED } from '../../../constants';

const initialState = {
    updateCardTokenStatus: IDLE,
    updateCardTokenError: null,
    updateCardTokenData: null,
    newCardStatus: IDLE,
    newCardError: null,
    newCardData: null,
};

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        resetCardValues: () => initialState,
    },
    extraReducers(builder) {
        builder

            .addCase(updateCardToken.pending, (state) => {
                state.updateCardTokenStatus = LOADING;
            })
            .addCase(updateCardToken.fulfilled, (state) => {
                state.updateCardTokenStatus = SUCCEEDED;
            })
            .addCase(updateCardToken.rejected, (state, action) => {
                state.updateCardTokenStatus = FAILED;
                state.updateCardTokenError = action.error.message;
            })
            .addCase(addCard.pending, (state) => {
                state.newCardStatus = LOADING;
            })
            .addCase(addCard.fulfilled, (state, action) => {
                const { status } = action.payload;
                if (status === 500) {
                    state.newCardStatus = FAILED;
                    state.newCardError = action.error;
                } else {
                    state.newCardStatus = SUCCEEDED;
                    state.newCardData = action.payload.data;
                }
            })
            .addCase(addCard.rejected, (state, action) => {
                state.newCardStatus = FAILED;
                state.newCardError = action.error.message;
            });
    },
});

export const { resetCardValues } = cardSlice.actions;
export default cardSlice.reducer;
