import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './login.styles.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    if (!username || !password) {
      console.log('Username and password are required');
      return;
    }

    try {
   
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

    
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful', data);
      
        navigate('/');
      } else {
        console.log('Login failed', response.statusText);
      
      }
    } catch (error) {
      console.error('Error during login', error);
    
    }
  };

  return (
    <div className="container">
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="center">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='login-button' type="submit">Login</button>
          <p>Don't have an account? <Link to="/SignIn">Sign In</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;