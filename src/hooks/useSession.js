import { useState } from 'react';

export const useSession = () => {
    const [session, setSessionInternal] = useState(() => {
        return localStorage.getItem('myma_session');
    });

    const setSession = (newSession) => {
        localStorage.setItem('myma_session', newSession);
        setSessionInternal(newSession);
    };

    return [session, setSession];
};
