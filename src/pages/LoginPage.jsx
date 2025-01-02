import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/app/login/', formData);
            const { access, refresh, user } = response.data;

            // Store tokens in localStorage
            localStorage.setItem('access', access);
            localStorage.setItem('refresh', refresh);

           // if (user.role === 'manager') {
            //    navigate('/manager-dashboard'); 
           // } else {
           //     navigate('/user-dashboard'); 
            navigate('/');
            
        } catch (err) {
            setError('Invalid username or password.');
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
            <h1>Login</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        style={{ width: '100%' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={{ width: '100%' }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '10px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    Login
                </button>
            </form>
            <div>
                <p>Не зареєстровані?</p>
                <Link to="/register">Реєстрація</Link> |{" "}
            </div>
        </div>
    );
};

export default LoginPage;