import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TabbedInterface from './components/TabbedInterface';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <TabbedInterface />
      </div>
    </Router>
  );
}

export default App;
