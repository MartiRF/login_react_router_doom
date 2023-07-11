import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import {useAuth} from '../context/authContext';


export const Login = () => {
  const [error, setError] = useState()
  const [user, setUser] = useState({
    email:'',
    password:'',
  })

  const navigate = useNavigate();

  const {login} = useAuth()

  const hadlerChange = ({target:{name,value}}) => {
    setUser({...user,[name]:value})
  }

  const handlerSumit = async(e) => {
    e.preventDefault()
    setError('')
    try {
      await login(user.email,user.password)
      navigate('/')
    } catch (error) {
        setError(error.message)
    }
  }

  return (
    <>
      {error && <p>{error}</p>}
      <form onSubmit={handlerSumit}>
        <label htmlFor="email">Email</label>
        <input onChange={hadlerChange} type="email" name="email" placeholder='email@email.con'/>
        <label htmlFor="password">Password</label>
        <input onChange={hadlerChange} type="password" name="password" />
        <input type="submit" value="Login" />
      </form>
    </>
  )
}
