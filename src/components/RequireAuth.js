import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext'

function RequireAuth({ children }) {
    const { isLoggedIn } = useContext(AuthContext);

    if (isLoggedIn) return <>{children}</>
    return <Navigate to='/' />
}

export default RequireAuth