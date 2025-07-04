const express = require('express');
const router = express.Router();
const Bus = require('../models/Bus');

// Get all buses
router.get('/', async (req, res) => {
    try {
        const buses = await Bus.find();
        res.json(buses);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching buses' });
    }
});

// Add a new bus
router.post('/', async (req, res) => {
    try {
        const bus = new Bus(req.body);
        const savedBus = await bus.save();
        res.json(savedBus);
    } catch (error) {
        res.status(500).json({ error: 'Error adding bus' });
    }
});

// Update a bus by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    try {
        const updatedBus = await Bus.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedBus) {
            return res.status(404).json({ error: 'Bus not found' });
        }
        res.json(updatedBus);
    } catch (error) {
        console.error('Error updating bus:', error);
        res.status(500).json({ error: 'Error updating bus' });
    }
});

// Delete a bus by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedBus = await Bus.findByIdAndDelete(req.params.id);
        if (!deletedBus) {
            return res.status(404).json({ error: 'Bus not found' });
        }
        res.json({ message: 'Bus deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting bus' });
    }
});

module.exports = router;
