import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const PrivateRoutes = ({ children }) => {
    const { user, load } = useContext(AuthContext);
    const location = useLocation();
    if(load){
        return <p>loading.......</p>
    }
    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;