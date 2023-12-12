import { createSlice } from '@reduxjs/toolkit';
import {
    getProducts,
    getProductsPromo,
} from '../../../services/product.service';

const initialState = {
    getProductsStatus: 'idle',
    getProductsError: null,
    getProductsData: [],
    getProductsPromoStatus: 'idle',
    getProductsPromoError: null,
    getProductsPromoData: [],
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getProducts.pending, (state, _action) => {
                state.getProductsStatus = 'loading';
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                const { data } = action.payload;
                state.getProductsStatus = 'succeeded';
                state.getProductsData = data;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.getProductsStatus = 'failed';
                state.getProductsError = action.error.message;
            })
            .addCase(getProductsPromo.pending, (state, _action) => {
                state.getProductsPromoStatus = 'loading';
            })
            .addCase(getProductsPromo.fulfilled, (state, action) => {
                const { data } = action.payload;
                state.getProductsPromoStatus = 'succeeded';
                state.getProductsPromoData = data;
            })
            .addCase(getProductsPromo.rejected, (state, action) => {
                state.getProductsPromoStatus = 'failed';
                state.getProductsPromoError = action.error.message;
            });
    },
});

export default productSlice.reducer;
