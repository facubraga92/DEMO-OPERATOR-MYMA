import Axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from './utils';

export const updateCardToken = createAsyncThunk(
    'card/updateCardToken',
    async ({ cardData }) => {
        const { data } = await Axios.put(
            BASE_URL + '/Customers/Card/Token',
            cardData
        );

        return data;
    }
);

export const addCard = createAsyncThunk(
    'customer/addCard',
    async (cardValues) => {
        console.log(cardValues);
        const { data } = await Axios.post(
            BASE_URL + '/Customers/Card',
            cardValues
        );

        return data;
    }
);

export const deleteCard = createAsyncThunk(
    'customer/deleteCard',
    async (cardId) => {
        const { data } = await Axios.delete(
            BASE_URL + `/Customers/Card/${cardId}`
        );

        return data;
    }
);
