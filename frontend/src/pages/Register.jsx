// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== repassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            await axios.post('http://localhost:5000/register', { name, email, password, repassword });
            window.location.href = '/login';
        } catch (err) {
            setError('Failed to register. Please try again.');
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'  >
            <div className='w-full max-w-md p-7 bg-white'>
            <h2 className='text-2xl text-center font-bold p-6 text-gray-700'>Register</h2>
            {error && <p className='text-red-500 text-center mb-4'>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className='mb-4'> 
                    <label className='block text-sm mb-2 font-semibold text-gray-600'>Name:</label>
                    <input
                     className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' 
                     type="text" 
                        value={name} onChange={(e) => setName(e.target.value)} required />
                </div>

                <div className='mb-4'>
                    <label className='block text-sm mb-2 font-semibold text-gray-600'>Email:</label>
                    <input
                     className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' 
                     type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
 
                <div className='mb-4'>
                    <label className='block text-sm mb-2 font-semibold text-gray-600'>Password:</label>
                    <input
                     className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' 
                     type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <div className='mb-6'>
                    <label className='block text-sm mb-2 font-semibold text-gray-600'>Re-enter Password:</label>
                    <input
                     className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' 
                     type="password" value={repassword} onChange={(e) => setRepassword(e.target.value)} required />
                </div>

                <button 
                    type="submit"
                    className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Register
                </button>
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account
                        <Link to="/login" className="text-blue-500 hover:text-red-500"> Login</Link>
                    </p>
                </div>
            </form>
            </div>
        </div>
    );
}

export default Register;
