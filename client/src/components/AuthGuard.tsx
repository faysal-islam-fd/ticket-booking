

import { Navigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthConext'; 

  export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  // const { user } = useAuth();
  const user = true

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children
};