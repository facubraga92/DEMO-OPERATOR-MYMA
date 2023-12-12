import Axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, createHeader } from './utils';

export const getPaymentMethods = createAsyncThunk(
    'payment-method/getPaymentMethods',
    async (access_token) => {
        const { data } = await Axios.get(
            BASE_URL + '/PaymentMethods',
            createHeader(access_token)
        );

        return data;
    }
);
