import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import LogIn from './components/LogIn';

const AuthRequired = () => {
    const user = useSelector(state=> state.user.user);

    return (
            user ? <Outlet/> : <Navigate to="/login"/>
        
    );
};

export default AuthRequired;