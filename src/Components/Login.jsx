import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // You can add authentication logic here (e.g., API call)
    // For now, we're directly navigating to dashboard
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r to-indigo-700 via-purple-700 from-blue-800 text-white px-4">
      <h2 className="text-4xl font-bold mb-6">Welcome Back!</h2>
      <form onSubmit={handleLogin} className="bg-white text-black p-6 rounded-2xl shadow-lg w-full max-w-sm space-y-4">
        <input type="email" placeholder="Email" className="w-full p-2 rounded border" required />
        <input type="password" placeholder="Password" className="w-full p-2 rounded border" required />
        <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded">
          Login
        </button>
      </form>
      <p className="mt-4 text-sm">
        Don’t have an account?{' '}
        <Link to="/signup" className="underline font-semibold">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
