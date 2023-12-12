import { createSlice } from '@reduxjs/toolkit';

import {
    createCustomer,
    getCustomer,
    getCustomerCards,
} from '../../../services/customer.service';

const initialState = {
    customerStatus: 'idle',
    customerError: null,
    customerData: null,
    customerCardsStatus: 'idle',
    customerCardsError: null,
    customerCardsData: null,
    newCustomerStatus: 'idle',
    newCustomerError: null,
    newCustomerData: null,
};

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getCustomer.pending, (state) => {
                state.customerStatus = 'loading';
            })
            .addCase(getCustomer.fulfilled, (state, action) => {
                const { data } = action.payload;
                state.customerStatus = 'succeeded';
                state.customerData = data;
            })
            .addCase(getCustomer.rejected, (state, action) => {
                state.customerStatus = 'failed';
                state.customerError = action.error.message;
            })
            .addCase(getCustomerCards.pending, (state) => {
                state.customerCardsStatus = 'loading';
            })
            .addCase(getCustomerCards.fulfilled, (state, action) => {
                const { data } = action.payload;
                state.customerCardsStatus = 'succeeded';
                state.customerCardsData = data;
            })
            .addCase(getCustomerCards.rejected, (state, action) => {
                state.customerCardsStatus = 'failed';
                state.customerCardsError = action.error.message;
            })
            .addCase(createCustomer.pending, (state) => {
                state.newCustomerStatus = 'loading';
            })
            .addCase(createCustomer.fulfilled, (state, action) => {
                const { status } = action.payload;
                if (status === 500) {
                    state.newCustomerStatus = 'failed';
                    state.newCustomerError = action.error;
                } else {
                    state.newCustomerStatus = 'succeeded';
                    state.newCustomerData = action.payload.data;
                }
            })
            .addCase(createCustomer.rejected, (state, action) => {
                state.newCustomerStatus = 'failed';
                state.newCustomerError = action.error.message;
            });
    },
});

export default customerSlice.reducer;
