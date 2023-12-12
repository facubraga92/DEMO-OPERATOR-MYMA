import { createSlice } from '@reduxjs/toolkit';
import { getOrders } from '../../../services/order.service';

const initialState = {
    isOrderInProgress: false,
    orderID: null,
    ordersStatus: 'idle',
    ordersError: null,
    ordersData: null,
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrderStatus(state, action) {
            state.isOrderInProgress = action.payload;
        },
        setOrderID(state, action) {
            state.isOrderInProgress = false;
            state.orderID = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(getOrders.pending, (state) => {
                state.ordersStatus = 'loading';
            })
            .addCase(getOrders.fulfilled, (state, action) => {
                const { data } = action.payload;
                state.ordersStatus = 'succeeded';
                state.ordersData = data;
            })
            .addCase(getOrders.rejected, (state, action) => {
                state.ordersStatus = 'failed';
                state.ordersError = action.error.message;
            });
    },
});

export const { setOrderStatus, setOrderID } = orderSlice.actions;

export default orderSlice.reducer;
