import axios from 'axios';
export const BASE_URL = process.env.REACT_APP_BASE_API;

export const createHeader = (access_token) => ({
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + access_token,
    },
});

export const setAuthToken = ({ access_token }) => {
    if (access_token) {
        axios.defaults.headers.common[
            'Authorization'
        ] = `Bearer ${access_token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};
