// Dashboard.jsx
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Dashboard.css";
import { Table } from "react-bootstrap";
import axios from "axios";
import DashboardNavbar from "./DashboardNavbar";

function Dashboard() {
    const [buses, setBuses] = useState([]);

    // Fetch buses from API
    useEffect(() => {
        fetchBuses();
    }, []);

    const fetchBuses = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/busdata");
            setBuses(response.data);
        } catch (error) {
            console.error("Error fetching buses:", error);
        }
    };

    const handleLogout = () => {
        // Add logout logic here
        console.log("User logged out");
    };

    return (
        <>
            {/* Include Navbar */}
            <DashboardNavbar onLogout={handleLogout} />
            <div className="back">
            <div className="moving-text-wrapper">
                <p className="moving-text">WELCOME to JSW Connect! Stay updated with the latest information about our services and more.</p>
            </div>

            {/* Carousel Section */}
            <div className="compact-carousel-wrapper my-4">

                <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">

                        <div className="carousel-item active" data-bs-interval="1000">
                            <div className="carousel-image-wrapper">
                                <img
                                    src="buses/bus1.png"
                                    className="d-block carousel-image"
                                    alt="Modern Bus Fleet"
                                />

                            </div>
                            <div className="carousel-caption">
                                <h5>Modern Bus Fleet</h5>
                                <p>Comfortable and efficient buses for all routes.</p>
                            </div>
                        </div>


                        <div className="carousel-item" data-bs-interval="1000">
                            <div className="carousel-image-wrapper">
                                <img
                                    src="buses/bus2.png"
                                    className="d-block carousel-image"
                                    alt="Eco-Friendly Buses"
                                />
                            </div>
                            <div className="carousel-caption">
                                <h5>Eco-Friendly Buses</h5>
                                <p>Environmentally friendly buses to reduce emissions.</p>
                            </div>
                        </div>
                        <div className="carousel-item"data-bs-interval="1000">
                            <div className="carousel-image-wrapper">
                                <img
                                    src="buses/bus3.png"
                                    className="d-block carousel-image"
                                    alt="Spacious and Comfortable"
                                />
                            </div>
                            <div className="carousel-caption">
                                <h5>Spacious and Comfortable</h5>
                                <p>Experience the ultimate comfort during your travel.</p>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            {/* Table Section */}
            <div className="table-section mt-5 ms-5 me-5 mb-5">
                <h3 className="table-heading text-center mb-4">Bus Time Table</h3>
                <Table striped bordered hover responsive className="custom-table">
                    <thead >
                        <tr className="table-info" >
                            <th>Bus No</th>
                            <th>Start Location</th>
                            <th>Start Time</th>
                            <th>End Location</th>
                            <th>End Time</th>
                            <th>Capacity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buses.map((bus) => (
                            <tr key={bus._id}>
                                <td>{bus.busNo}</td>
                                <td>{bus.startLocation}</td>
                                <td>{bus.startTime}</td>
                                <td>{bus.endLocation}</td>
                                <td>{bus.endTime}</td>
                                <td>{bus.capacity}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            </div>
        </>
    );
}

export default Dashboard;
