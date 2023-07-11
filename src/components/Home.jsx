import { useAuth } from "../context/authContext";
import {useNavigate} from 'react-router-dom';



export const Home = () => {
  const {user,logout, loading} = useAuth();

  const navigate = useNavigate();
  const hadlerLogOut = async() => {
    await logout();
    navigate('/login')
  }
  if(loading) return <h1>Loading</h1>
  return (
    <>
    <h1>Bienvenido papasito: {user.email}</h1>
    <button onClick={hadlerLogOut}>Salir</button>
    </>
    )
}
