import React, { useState } from 'react';
import { Form, Button, Container, Alert, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';



const EmployeeLogin = ({ onLogin }) => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulating an async login process
        setTimeout(() => {
            if (credentials.email === 'sam@gmail.com' && credentials.password === '123') {
                onLogin('employee');
                navigate('/admin-dashboard');
            } else {
                setErrorMessage('Invalid email or password. Please try again.');
            }
            setIsLoading(false);
        }, 1000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
        setErrorMessage(''); // Clear error message on input change
    };

    return (
        <Container className="mt-5 login-container">
            <h2 className="text-center">Admin Login</h2>
           
            <Form onSubmit={handleLogin} className="mt-4">
                <Form.Group controlId="employeeEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                        aria-describedby="emailHelpBlock"
                    />
                   
                </Form.Group>
                <Form.Group controlId="employeePassword" className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                        aria-describedby="passwordHelpBlock"
                    />
                  
                </Form.Group>
                {errorMessage && <Alert variant="danger" className="mt-3">{errorMessage}</Alert>}
                <Button
                    variant="success"
                    type="submit"
                    className="w-100 mt-3"
                    disabled={isLoading}
                >
                    {isLoading ? <Spinner animation="border" size="sm" /> : 'Login'}
                </Button>
            </Form>
        </Container>
    );
};

export default EmployeeLogin;