import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state

    // Enhanced validation
    if (!email) {
      setError('Please enter your email');
      return;
    }
    if (!password) {
      setError('Please enter your password');
      return;
    }

    try {
      const response = await axios.post(
        '/api/auth/login',
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*', // Add CORS header
          },
        }
      );

      // Handle different response scenarios
      if (response.data.statusCode === 200) {
        // Successful login
        const { accessToken, refreshToken } = response.data.data;

        // Secure cookie storage
        Cookies.set('accessToken', accessToken, {
          secure: true, // Only send over HTTPS
          sameSite: 'strict', // Protect against CSRF
        });
        Cookies.set('refreshToken', refreshToken, {
          secure: true,
          sameSite: 'strict',
        });

        // Navigate to home page
        navigate('/contractor/home');
      } else {
        // Handle login failure
        setError(response.data.message || 'Login failed');
      }
    } catch (error) {
      // More detailed error handling
      if (error.response) {
        // The request was made and the server responded with a status code
        setError(error.response.data.message || 'Login failed');
      } else if (error.request) {
        // The request was made but no response was received
        setError('No response from server. Please check your connection.');
      } else {
        // Something happened in setting up the request
        setError('An error occurred. Please try again.');
      }
      console.error('Login Error:', error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-200 flex flex-col justify-center items-center p-4">
      <form
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-md flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="mb-2 font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
