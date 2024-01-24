'use client';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email:'',
    password:''
  });
const updateData=(data)=>{
  setUser(data);
}
  return (
    <AuthContext.Provider value={{user,updateData }}>
      {children}
    </AuthContext.Provider>
  );
};

 const useAuth = () => {
  return useContext(AuthContext);
};
export { AuthProvider, useAuth };