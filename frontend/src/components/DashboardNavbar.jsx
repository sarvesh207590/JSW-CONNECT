import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./DashboardNavbar.css";
import { useNavigate } from "react-router-dom";

const DashboardNavbar = () => {
    const navigate = useNavigate(); 
    const handleLogout = () => {
       
        console.log("User logged out");
        alert("User Successfully Logout!!!")
        navigate("/");
      };
   
    return (
        <Navbar bg="blue" variant="dark" expand="lg" className="dashboard-navbar shadow-sm">
            
                
                <Navbar.Toggle aria-controls="dashboard-navbar-nav" />
                <Navbar.Collapse id="dashboard-navbar-nav">
                    <Nav className="ms-auto">
                    <Nav.Link href="/dashboard" className="nav-link">
                            Home
                        </Nav.Link>
                        <Nav.Link href="/realtime-map" className="nav-link">
                            Real-Time Map
                        </Nav.Link>
                       

                        <Nav.Link href="/About-us" className="nav-link">
                           About Us 
                        </Nav.Link>
                        <Button
                           
                            className="ms-2 btn btn-danger "
                            onClick={handleLogout} 
                        >
                            Logout
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            
        </Navbar>
    );
};

export default DashboardNavbar;
