const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee'); // Import the Employee model
const bcrypt = require('bcrypt'); // To hash passwords and compare them

// Add a new employee (for testing purposes)
router.post('/add', async (req, res) => {
    try {
        // Hash password before saving
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newEmployee = new Employee({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });

        await newEmployee.save();
        res.status(201).json({ message: 'Employee added successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Employee login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find employee by email
        const employee = await Employee.findOne({ email });
        if (!employee) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Compare password with the hashed password in the database
        const isPasswordCorrect = await bcrypt.compare(password, employee.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Successful login
        res.status(200).json({ message: 'Login successful', employee });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
