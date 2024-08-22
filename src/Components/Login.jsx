import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Assuming you're using Firebase
import AuthContext from '../context/AuthContext';
import './styles.css';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { auth } = useContext(AuthContext); // Assuming AuthContext provides Firebase auth

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      // Sign in the user with email and password
      await signInWithEmailAndPassword(auth, email, password);
      
      // Redirect to the Management Page after successful sign-in
      navigate('/ManagePage');
    } catch (error) {
      console.error('Sign-in error code:', error.code);
      console.error('Sign-in error message:', error.message);
      setError('Invalid email or password. Please try again.');
    }
  };
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <div className="switch-auth">
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;
