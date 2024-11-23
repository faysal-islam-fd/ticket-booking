

import React, { createContext, useContext, useState } from 'react';
import { User, AuthContextType } from '../types';

 const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null);

  
  console.log(user);
  
  const logout = () => {
    localStorage.removeItem('user');    
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user,setUser, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};