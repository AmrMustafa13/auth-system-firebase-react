import React, { createContext, useState } from 'react'

export const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }
});

export function AuthContextProvider({ children }) {

    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);

    const isLoggedIn = !!token

    const login = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    }

    const logout = () => {
        setToken(null)
        localStorage.removeItem('token');
    }

    const contextValue = {
        token,
        isLoggedIn,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext