import { createContext } from 'react';

export const Channels = {
    RECIVE_MESSAGES: 'OrderStarted',
    SEND_MESSAGES: 'SendMessage',
};

export const SignalrActions = {
    UPDATE_CONNECTION: 'update_connection',
};

export const defaultValueSignalrContext = {
    connectionInfo: undefined,
    roomState: undefined,
    user: {
        name: '',
        email: '',
    },
    room: '',
};

export const defaultValue = {
    signalr: defaultValueSignalrContext,
    dispatch() {},
};

const SignalrContext = createContext(defaultValue);

export default SignalrContext;
