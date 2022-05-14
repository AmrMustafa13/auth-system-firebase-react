import React, { useContext, useRef } from 'react'
import AuthContext from '../contexts/AuthContext'
import { useNavigate, Link } from 'react-router-dom';
import classes from './Logged.module.css'

function ChangePassword() {

    const { logout, token } = useContext(AuthContext);

    const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

    const newPasswordRef = useRef();

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/', { replace: true });
    }

    const handleChangePasswordSubmit = (e) => {
        e.preventDefault();
        fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`, {
            method: 'POST',
            body: JSON.stringify({
                idToken: token,
                password: newPasswordRef.current.value,
                returnSecureToken: false
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json()).then((data) => {
            console.log(data);
            navigate('/profile');
        }).catch((err) => console.log(err))
    }

    return (
        <div className={classes.profile}>
            <form onSubmit={handleChangePasswordSubmit}>
                <input placeholder='New Password' type='password' ref={newPasswordRef} />
                <button type='submit'>Change Password</button>
                <Link to='/profile'>Go to Profile</Link>
            </form>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default ChangePassword