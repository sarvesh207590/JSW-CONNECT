import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import "./Navabar.css"
const AppNavbar = () => (
    <Navbar
        className="border-bottom shadow background"
        style={{
          
        }}
    >
         <Container className="justify-content-center"
         > 
            <Navbar.Brand
                href="/"
                className="fw-bold text-dark d-flex align-items-center  logo"
            >
                <img
                    src="/mergelogo.png"
                    
                    
                    alt="JSW Logo"
                    style={{
                        height: '60px',  
                        width: '330px',   
                        marginLeft: '',
                       
        
                         
                    }}
                    
                    
                />
                
            </Navbar.Brand>
           
        </Container>
    </Navbar>
);



export default AppNavbar;