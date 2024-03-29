
import Header from '../components/Header';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Auth = () => {
  const [authToken, setAuthToken] = useState('');
  const [demoData, setDemoData] = useState('');

  // Function to register a user
  const registerUser = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
        firstname: 'user',
        lastname: 'user',
        email: 'user@user.com',
        password: 'password',
      });

      setAuthToken(response.data.access_token);
      console.log('Registered user successfully! token:', response.data.access_token);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  // Function to query the demo endpoint
  const queryDemoEndpoint = async () => {
    try {
      const response = await axios.get('/api/v1/demo-controller', {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });

      setDemoData(response.data);
    } catch (error) {
      console.error('Error querying demo endpoint:', error);
    }
  };

  return (
    <div>
      <button onClick={registerUser}>Register User</button>
      <button onClick={queryDemoEndpoint} disabled={!authToken}>Query Demo Endpoint</button>
      <div>{demoData}</div>
    </div>
  );
};

export default Auth;