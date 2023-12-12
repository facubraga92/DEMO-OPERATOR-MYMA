import { Navigate } from 'react-router-dom';
import { useHasBeen } from '../hooks/useHasBeen';

export const HasBeenRoute = ({ children }) => {
    const [hasBeen] = useHasBeen();

    return !hasBeen ? children : <Navigate to="/auth" />;
};
