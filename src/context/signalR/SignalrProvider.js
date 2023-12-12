import React, { useReducer } from 'react';
import SignalrContext, { defaultValueSignalrContext } from './SignalrContext';
import SignalrReducer from './signalrReducer';

const SignalrProvider = ({ children }) => {
    const [signalr, dispatch] = useReducer(
        SignalrReducer,
        defaultValueSignalrContext
    );

    return (
        <SignalrContext.Provider value={{ signalr, dispatch }}>
            {children}
        </SignalrContext.Provider>
    );
};

export default SignalrProvider;
