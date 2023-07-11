import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from "../firebase/config";

export const AuthContext = createContext();
export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) throw new Error('There is not provider')
    return context
}


export const AuthProvide = ({children}) => {

  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true);
  const singup = (email,password) => createUserWithEmailAndPassword(auth,email,password);

  const login = (email,password) => signInWithEmailAndPassword(auth,email,password);

  const logout = () => signOut(auth)

  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => unSuscribe()
  },[])

  return (
    <AuthContext.Provider value={{ singup, login, logout, user, loading }}>
        {children}
    </AuthContext.Provider>
  )
}
