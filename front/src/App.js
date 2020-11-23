import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          BAP-YAK
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/main">
          <button className="App-login"> 
            LOGIN
          </button>
        </Link>
      </header>
    </div>

    
  );
}

export default App;