import React, { useState, useEffect } from 'react';
import { Button, Table, Modal, Form, Container } from 'react-bootstrap';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';

const AdminDashboard = () => {
    const [buses, setBuses] = useState([]);
    const [show, setShow] = useState(false);
    const [editingBus, setEditingBus] = useState(null);

  
    useEffect(() => {
        fetchBuses();
    }, []);

    const fetchBuses = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/busdata');
            setBuses(response.data);
        } catch (error) {
            console.error('Error fetching buses:', error);
        }
    };

    const handleAddOrUpdateBus = async (e) => {
        e.preventDefault(); 
        try {
            if (editingBus && editingBus._id) {
                // Update existing bus
                const response = await axios.put(
                    `http://localhost:5000/api/busdata/${editingBus._id}`,
                    editingBus
                );
                setBuses((prevBuses) =>
                    prevBuses.map((bus) =>
                        bus._id === editingBus._id ? response.data : bus
                    )
                );
            } else {
                // Add new bus
                const response = await axios.post(
                    'http://localhost:5000/api/busdata',
                    editingBus
                );
                setBuses((prevBuses) => [...prevBuses, response.data]);
            }
            setShow(false);
        } catch (error) {
            console.error('Error saving bus:', error.response?.data || error.message);
        }
    };

    const handleDeleteBus = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/busdata/${id}`);
            setBuses((prevBuses) => prevBuses.filter((bus) => bus._id !== id));
        } catch (error) {
            console.error('Error deleting bus:', error);
        }
    };

    const handleEditClick = (bus) => {
        setEditingBus({ ...bus });
        setShow(true);
    };

    const handleAddClick = () => {
        setEditingBus({
            busNo: '', 
            startLocation: '',
            startTime: '',
            endLocation: '',
            endTime: '',
            capacity: '',
        });
        setShow(true);
    };

    const handleModalClose = () => {
        setEditingBus(null);
        setShow(false);
    };

    return (
        <>
       <AdminNavbar/>
        <Container className="mt-5">
            <h2 className="text-center mb-4">Bus Management Dashboard</h2>
            <Table striped bordered hover responsive>
                <thead className="table-dark">
                    <tr>
                        <th>Bus No</th>
                        <th>Start Location</th>
                        <th>Start Time</th>
                        <th>End Location</th>
                        <th>End Time</th>
                        <th>Capacity</th>
                        <th>Actions</th>
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
                            <td>
                                <Button
                                    variant="warning"
                                    size="sm"
                                    className="me-2"
                                    onClick={() => handleEditClick(bus)}
                                >
                                    Update
                                </Button>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleDeleteBus(bus._id)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="text-center mt-3">
                <Button variant="success" onClick={handleAddClick} className='mb-4'>
                    Add New Bus
                </Button>
            </div>

            <Modal show={show} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {editingBus && editingBus._id ? 'Update Bus' : 'Add New Bus'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleAddOrUpdateBus}>
                        <Form.Group className="mb-3">
                            <Form.Label>Bus No</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter bus number"
                                value={editingBus?.busNo || ''}
                                onChange={(e) =>
                                    setEditingBus({
                                        ...editingBus,
                                        busNo: e.target.value,
                                    })
                                }
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Start Location</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter start location"
                                value={editingBus?.startLocation || ''}
                                onChange={(e) =>
                                    setEditingBus({
                                        ...editingBus,
                                        startLocation: e.target.value,
                                    })
                                }
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Start Time</Form.Label>
                            <Form.Control
                                type="time"
                                value={editingBus?.startTime || ''}
                                onChange={(e) =>
                                    setEditingBus({ ...editingBus, startTime: e.target.value })
                                }
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>End Location</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter end location"
                                value={editingBus?.endLocation || ''}
                                onChange={(e) =>
                                    setEditingBus({
                                        ...editingBus,
                                        endLocation: e.target.value,
                                    })
                                }
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>End Time</Form.Label>
                            <Form.Control
                                type="time"
                                value={editingBus?.endTime || ''}
                                onChange={(e) =>
                                    setEditingBus({ ...editingBus, endTime: e.target.value })
                                }
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Capacity</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter capacity"
                                value={editingBus?.capacity || ''}
                                onChange={(e) =>
                                    setEditingBus({
                                        ...editingBus,
                                        capacity: Number(e.target.value),
                                    })
                                }
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            {editingBus && editingBus._id ? 'Update' : 'Add'}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
        </> );
};

export default AdminDashboard;
