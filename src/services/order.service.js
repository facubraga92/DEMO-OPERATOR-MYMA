import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';

import { BASE_URL, createHeader } from './utils';

export const createOrder = async (args) => {
    const { storeId, cardId } = args;

    const { data } = await Axios.post(`${BASE_URL}/Orders`, {
        StoreId: storeId,
        CardId: cardId,
    });

    return data;
};

export const getOrders = createAsyncThunk(
    'Orders/getOrders',
    async (access_token) => {
        const { data } = await Axios.get(
            BASE_URL + '/Orders/Customer?pageSize=20',
            createHeader(access_token)
        );

        return data;
    }
);
