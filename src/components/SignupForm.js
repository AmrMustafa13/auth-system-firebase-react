import React, { useRef } from 'react'
import classes from './SignupForm.module.css'
import { Link, useNavigate } from 'react-router-dom';

function SignupForm() {

    const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
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
            console.log(data)
            navigate('/');
        }).catch((err) => console.log(err))
    }

    return (
        <form className={classes.form} onSubmit={handleSignupSubmit}>
            <input placeholder='Email' type='email' ref={emailRef} />
            <input placeholder='Password' type='password' ref={passwordRef} />
            <button type='submit'>Signup</button>
            <Link to='/'>Already have an account ?</Link>
        </form >
    )
}

export default SignupForm