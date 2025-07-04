import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './AdminDashboard.css'

const AdminNavbar = () => {
    const navigate = useNavigate(); 
    const handleLogout = () => {
       
        console.log("User logged out");
        alert("Admin Successfully Logout!!!")
        navigate("/");
      };
   
    return (
        <Navbar bg="blue" variant="dark" expand="lg" className="dashboard-navbar shadow-sm">
            
                
                <Navbar.Toggle aria-controls="dashboard-navbar-nav" />
                <Navbar.Collapse id="dashboard-navbar-nav">
                    <Nav className="ms-auto">

                       
                        <Nav.Link href="/dashboard" className="nav-link">
                          Employee Dashboard
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

export default AdminNavbar;
