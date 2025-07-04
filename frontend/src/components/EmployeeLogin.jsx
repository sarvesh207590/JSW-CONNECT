import React, { useState } from "react";
import { Form, Button, Container, Alert, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./EmployeeLogin.css";

const EmployeeLogin = ({ onLogin }) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        
        try {
            const response = await axios.post("http://localhost:5000/api/employees/login", credentials);
            if (response.status === 200) {
                onLogin("employee");
                navigate("/dashboard");
            }
        } catch (error) {
            setErrorMessage(error.response?.data?.message || "Login failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
        setErrorMessage("");
    };

    return (
        <Container className="mt-5 login-container">
            <h2 className="text-center">Employee Login</h2>

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
                    />
                </Form.Group>
                {errorMessage && <Alert variant="danger" className="mt-3">{errorMessage}</Alert>}
                <Button
                    variant="success"
                    type="submit"
                    className="w-100 mt-3"
                    disabled={isLoading}
                >
                    {isLoading ? <Spinner animation="border" size="sm" /> : "Login"}
                </Button>
            </Form>
        </Container>
    );
};

export default EmployeeLogin;
