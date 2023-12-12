import { createSlice } from '@reduxjs/toolkit';
import { getPaymentMethods } from '../../../services/payment-method.service';

const initialState = {
    status: 'idle',
    error: null,
    data: [],
};

const paymentMethodsSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getPaymentMethods.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(getPaymentMethods.fulfilled, (state, action) => {
                const { data } = action.payload;
                state.status = 'succeeded';
                state.data = data;
            })
            .addCase(getPaymentMethods.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default paymentMethodsSlice.reducer;
