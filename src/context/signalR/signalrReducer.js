import { SignalrActions } from './SignalrContext';

const SignalrReducer = (state, action) => {
    switch (action.type) {
        case SignalrActions.UPDATE_CONNECTION:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};

export default SignalrReducer;
