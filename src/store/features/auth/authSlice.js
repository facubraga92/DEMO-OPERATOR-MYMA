import { createSlice } from '@reduxjs/toolkit';
import { authCallback } from '../../../services/auth.service';

const initialState = {
    authStatus: 'idle',
    authError: null,
    authData: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(authCallback.pending, (state, action) => {
                state.authStatus = 'loading';
            })
            .addCase(authCallback.fulfilled, (state, action) => {
                const { access_token, profile } = JSON.parse(action.payload);

                state.authStatus = 'succeeded';
                state.authData = { access_token, profile };
            })
            .addCase(authCallback.rejected, (state, action) => {
                state.authStatus = 'failed';
                state.authError = action.error.message;
            });
    },
});

export default authSlice.reducer;
