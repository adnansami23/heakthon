import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (credentials) => {
    // Make API call to log in
    // Example:
    // const response = await axios.post('/api/login', credentials);
    // setUser(response.data.user);
    // localStorage.setItem('token', response.data.token);
    setUser({ username: credentials.username });
    navigate('/taskBoard');
  };

  const signup = async (userInfo) => {
    // Make API call to sign up
    // Example:
    // const response = await axios.post('/api/signup', userInfo);
    // setUser(response.data.user);
    // localStorage.setItem('token', response.data.token);
    setUser({ username: userInfo.username });
    navigate('/taskBoard');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    navigate('/Login');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Verify token and set user
      // Example:
      // const user = await axios.get('/api/me', { headers: { Authorization: `Bearer ${token}` } });
      // setUser(user.data);
      setUser({ username: 'sampleUser' });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
