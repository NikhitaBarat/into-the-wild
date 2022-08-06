import React from 'react';
import './App.css';
import { Home } from './pages';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
