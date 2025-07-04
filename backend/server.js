const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const busRoutes = require('./routes/busRoutes'); 
const employeeRoutes = require('./routes/employeeRoutes');
const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON bodies

// MongoDB Connection
const MONGO_URI = 'mongodb://localhost:27017/JSW';
mongoose
    .connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1); // Exit process with failure code if MongoDB fails
    });

// Routes
app.use('/api/busdata', busRoutes); 
app.use('/api/employees', employeeRoutes);

// Default Route (Health Check)
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

// Start the Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
