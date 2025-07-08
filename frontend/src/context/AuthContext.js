import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    const isAdmin = localStorage.getItem('isAdmin');
    if (token && email) setUser({ email, isAdmin });
  }, []);

  const login = (data) => {
    localStorage.setItem('token', data.token);
    const decoded = JSON.parse(atob(data.token.split('.')[1]));
    localStorage.setItem('email', decoded.email);
    localStorage.setItem('isAdmin', decoded.isAdmin);
    setUser({ email: decoded.email, isAdmin: decoded.isAdmin });
    navigate(decoded.isAdmin ? '/admin' : '/events');
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
