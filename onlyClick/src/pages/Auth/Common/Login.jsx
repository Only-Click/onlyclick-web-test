import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Login() {
  const [loginMethod, setLoginMethod] = useState('phone'); // 'phone' or 'email'
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validation
    if (loginMethod === 'phone' && !phoneNumber) {
      setError('Please enter a phone number');
      setLoading(false);
      return;
    }

    if (loginMethod === 'email' && !email) {
      setError('Please enter an email');
      setLoading(false);
      return;
    }

    try {
      const payload = {
        ...(loginMethod === 'phone' ? { phoneNumber } : { email }),
        ...(password && { password }), // Only include password if it's not empty
      };

      const response = await axios.post('/api/auth/login', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        // Different navigation based on login method
        if (loginMethod === 'phone') {
          navigate('/auth/contractor/verifyOtp', {
            state: {
              phoneNumber,
              loginMethod,
            },
          });
        } else {
          // Check if additional verification is needed
          if (response.data.requiresOtp) {
            navigate('/auth/verify-otp', {
              state: {
                email,
                loginMethod,
              },
            });
          } else {
            // Store tokens securely
            const { accessToken, refreshToken } = response.data.data;

            Cookies.set('accessToken', accessToken, {
              secure: true,
              sameSite: 'strict',
            });

            Cookies.set('refreshToken', refreshToken, {
              secure: true,
              sameSite: 'strict',
            });

            // Navigate to appropriate dashboard
            navigate('/contractor/home');
          }
        }
      }
    } catch (error) {
      // Handle specific error scenarios
      if (error.response) {
        switch (error.response.status) {
          case 400:
            setError('Invalid login credentials');
            break;
          case 401:
            setError('Unauthorized access');
            break;
          case 404:
            setError('User not found');
            break;
          default:
            setError('Login failed. Please try again.');
        }
      } else if (error.request) {
        setError('No response from server. Please check your connection.');
      } else {
        setError('An error occurred. Please try again.');
      }
      console.error('Login Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleLoginMethod = () => {
    setLoginMethod((prev) => (prev === 'phone' ? 'email' : 'phone'));
    // Reset fields when switching
    setPhoneNumber('');
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-slate-200 flex flex-col justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          {loginMethod === 'phone' ? 'Phone Login' : 'Email Login'}
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {error}
          </div>
        )}

        {loginMethod === 'phone' ? (
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your phone number"
              pattern="[0-9]{10}"
              title="Please enter a 10-digit phone number"
              required
            />
          </div>
        ) : (
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>
        )}

        {/* Optional Password Field */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password (Optional)
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          disabled={loading}
        >
          {loading
            ? 'Processing...'
            : loginMethod === 'phone'
              ? 'Send OTP'
              : 'Login'}
        </button>

        <div className="text-center mt-4">
          <button
            type="button"
            onClick={toggleLoginMethod}
            className="text-blue-500 hover:underline"
          >
            Switch to {loginMethod === 'phone' ? 'Email' : 'Phone'} Login
          </button>
        </div>

        {/* Additional Links */}
        <div className="text-center mt-4">
          <a
            href="/forgot-password"
            className="text-sm text-gray-600 hover:underline"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
