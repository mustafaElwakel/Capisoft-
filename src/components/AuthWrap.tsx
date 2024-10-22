import React, { Children } from 'react';
import Header from './Header';
import Home from './Home';
import {createContext, useContext, useState } from "react"
import { AuthContext } from './Context';



export interface User {
  name: string;
  pass: string;
}

interface DemoProps {}

export default function AuthWrap({}: DemoProps) {
  const [user, setUser] = useState<User>({
    name: '',
    pass: '',
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value, // Dynamically update based on input field name (either 'name' or 'pass')
    }));
  };
    return (
      <>
  <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="pass"
            value={user.pass}
            onChange={handleInputChange}
            required
          />
        </div>      
      <AuthContext.Provider value ={user}>
          <Home/>
      </AuthContext.Provider>
    </>
      
  );
};

