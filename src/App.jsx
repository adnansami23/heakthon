import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import TaskBoard from './Components/TaskBoard';



const App = () => {
  return (
    
      <Router>
        <AuthProvider>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/TaskBoard" element={<TaskBoard/>} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
         </AuthProvider>
      </Router>
   
  );
};

export default App;
