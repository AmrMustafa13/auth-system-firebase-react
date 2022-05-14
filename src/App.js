import React, { useContext } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Profile from './components/Profile'
import ChangePassword from './components/ChangePassword'
import SignupForm from './components/SignupForm'
import RequireAuth from './components/RequireAuth'
import AuthContext from './contexts/AuthContext'


function App() {

  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Routes>
      {!isLoggedIn && <Route path='/' element={<LoginForm />} />}
      {!isLoggedIn && <Route path='/signup' element={<SignupForm />} />}
      <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} />
      <Route path='/change' element={<RequireAuth><ChangePassword /></RequireAuth>} />
      <Route path='*' element={<div>This page can't be found</div>} />
    </Routes>
  )
}

export default App