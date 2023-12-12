import Axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from './utils';

export const getCustomer = createAsyncThunk(
    'customer/getCustomer',
    async () => {
        const { data } = await Axios.get(BASE_URL + '/Customers');

        return data;
    }
);

export const createCustomer = createAsyncThunk(
    'customer/createCustomer',
    async ({ customerData }) => {
        const { data } = await Axios.post(
            BASE_URL + '/Customers',
            customerData
        );

        return data;
    }
);

export const getCustomerCards = createAsyncThunk(
    'customer/getCustomerCards',
    async () => {
        const { data } = await Axios.get(BASE_URL + '/Customers/Card');

        return data;
    }
);
