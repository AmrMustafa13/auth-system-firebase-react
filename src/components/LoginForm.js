import React, { useContext, useRef } from 'react'
import classes from './LoginForm.module.css'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

function Form() {

    const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
            method: 'POST',
            body: JSON.stringify({
                email: emailRef.current.value,
                password: passwordRef.current.value,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json()).then((data) => {
            console.log(data);
            login(data.idToken);
            navigate('/profile', { replace: true })
        }).catch((err) => console.log(err))
    }

    return (
        <form className={classes.form} onSubmit={handleLoginSubmit}>
            <input placeholder='Email' type='email' ref={emailRef} />
            <input placeholder='Password' type='password' ref={passwordRef} />
            <button type='submit'>Login</button>
            <Link to='/signup'>Create a new account</Link>
        </form >
    )
}

export default Form