import React, { useState } from 'react';
import Header from './Header'; // Adjust the path based on where your Header component is located
import { useUserContext } from './Context';

const Home: React.FC = () => {
  // State variables for email and password
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  // Initialize history for navigation

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

  };

  return (
    <>
      <div style={{ margin: '20px' }}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state on change
              required // Make this field required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state on change
              required // Make this field required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Home;
