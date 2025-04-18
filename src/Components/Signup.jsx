import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4">
      <h2 className="text-4xl font-bold mb-6">Create an Account</h2>
      <form className="bg-white text-black p-6 rounded-2xl shadow-lg w-full max-w-sm space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 rounded border" required />
        <input type="email" placeholder="Email" className="w-full p-2 rounded border" required />
        <input type="password" placeholder="Password" className="w-full p-2 rounded border" required />
        <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded">Sign Up</button>
      </form>
      <p className="mt-4 text-sm">
        Already have an account?{' '}
        <Link to="/" className="underline font-semibold">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
