import axios from 'axios';
import React, { useState } from 'react';

const CreateAccount = () => {
  // State for form inputs
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const packet = {
      name,
      phoneNumber: phone,
      password,
      address,
      role: 'user',
    };
    try {
      const response = await axios.post('/api/auth/register', packet); // Include packet in the request
      console.log('Account created successfully:', response.data);
    } catch (error) {
      console.error('Error creating account:', error);
    }
    // Reset form fields
    setName('');
    setPhone('');
    setPassword('');
    setAddress('');
  };

  return (
    <div className="container">
      <style>
        {`
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                        font-family: Arial, sans-serif;
                    }

                    body {
                        background-color: #f5f5f5;
                        min-height: 100vh;
                    }

                    .container {
                        max-width: 430px;
                        margin: 0 auto;
                        min-height: 100vh;
                        background-color: white;
                        display: flex;
                        flex-direction: column;
                        border: 0.5px solid #288ba8;
                        border-radius: 30px;
                        overflow: hidden;
                    }

                    .image-container {
                        height: 35vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 20px;
                    }

                    .form-container {
                        flex-grow: 1;
                        background-color: #fff;
                        border-top-left-radius: 30px;
                        border-top-right-radius: 30px;
                        padding: 20px;
                        box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
                    }

                    h1 {
                        color: #288ba8;
                        text-align: center;
                        font-size: 24px;
                        margin-bottom: 30px;
                    }

                    .input-container {
                        margin-bottom: 20px;
                    }

                    label {
                        display: block;
                        font-size: 16px;
                        color: #333;
                        margin-bottom: 8px;
                    }

                    input {
                        width: 100%;
                        padding: 12px;
                        font-size: 16px;
                        border: 0.5px solid #288ba8;
                        border-radius: 10px;
                        outline: none;
                    }

                    input::placeholder {
                        color: #999;
                    }

                    .signup-button {
                        width: 100%;
                        padding: 15px;
                        background-color: #288ba8;
                        border: 0.5px solid #288ba8;
                        border-radius: 10px;
                        color: #fff;
                        font-size: 18px;
                        font-weight: 600;
                        cursor: pointer;
                        margin-top: 20px;
                        transition: all 0.3s ease;
                    }

                    .signup-button:hover {
                        background-color: #1f7a94;
                        border-color: #1f7a94;
                    }

                    /* Mobile responsiveness */
                    @media (max-width: 480px) {
                        .container {
                            width: 100%;
                        }
                    }

                    .logo-image {
                        max-width: 200px;
                        max-height: 200px;
                        object-fit: contain;
                    }
                `}
      </style>

      {/* Top 35% for image */}
      <div className="image-container">
        <img src="/pic.jpeg" alt="Image" className="logo-image" />
      </div>

      {/* Bottom 65% for form */}
      <div className="form-container">
        <h1>Create Account</h1>

        <form id="signupForm" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="password">Create Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
