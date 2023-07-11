import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Home, Login, ProtectedRoute, Register } from './components/'
import { AuthProvide } from './context/authContext'
export const App = () => {

  return (
    <div className='bg-slate-300 h-screen text-black flex'>
      <AuthProvide>
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes> 
      </AuthProvide>
    </div>
  )
}
