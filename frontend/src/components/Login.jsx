import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

const Login = () => {
    const customCardStyle = {
        width: "100%",
        maxWidth: "600px",
        minHeight: "270px",
        borderRadius: "15px",
        backgroundColor: "#f9f9f9",
        // backgroundColor: " rgba(194, 207, 236, 0.36)",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    };

    const buttonStyle = {
        borderRadius: "30px",
        fontSize: "1rem",
        padding: "10px 20px",
        transition: "all 0.3s ease-in-out",
    };

    const containerStyle = {
        backgroundImage: "url('buses/bus_background.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "10vw",
        paddingRight: "10vw",
    };

    return (
        <>
            {/* Login Container */}
            <Container
                fluid
                className="d-flex justify-content-center align-items-center"
                style={containerStyle}
            >
                <Row className="w-100">
                    <Col xs={12} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                        <Card className="p-4 text-center" style={customCardStyle}>
                            <h3 className="mb-4" style={{ fontWeight: "bold", color: "#333" }}>
                                Login
                            </h3>
                            <p style={{ fontWeight: "bold", color: "#666" }}>Select your role to proceed</p>
                            <Row>
                                <Col>
                                    <Button
                                        variant="primary"
                                        href="/admin-login"
                                        className="w-100 mb-3 fw-bold"
                                        style={buttonStyle}
                                    >
                                        Login as Admin
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button
                                        variant="success"
                                        href="/employee-login"
                                        className="w-100 fw-bold"
                                        style={buttonStyle}
                                    >
                                        Login as Employee/Worker
                                    </Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;