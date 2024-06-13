// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <HomePage />
      </div>
    </Router>
  );
}

export default App;
