import React from 'react';
import { BrowserRouter , Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import  AuthWrap  from './components/AuthWrap';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthWrap/>
      </BrowserRouter>
    </div>
  );
}


