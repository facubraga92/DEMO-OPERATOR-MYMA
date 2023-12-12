import { useState } from 'react';

export const useHasBeen = () => {
    const [hasBeenLS, setHasBeenLS] = useState(() => {
        return localStorage.getItem('myma_has_been');
    });

    const setHasBeenState = (value) => {
        localStorage.setItem('myma_has_been', value);
        setHasBeenLS(value);
    };

    return [hasBeenLS, setHasBeenState];
};
