import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';

const App = () => {
  return (
    <Router>
      <nav className="bg-gray-900 text-white flex justify-between px-6 py-3">
        <h1 className="text-xl font-bold">AI-vengers</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Login</Link>
          <Link to="/signup" className="hover:underline">Signup</Link>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
