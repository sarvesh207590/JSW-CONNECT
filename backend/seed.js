const mongoose = require('mongoose');
const Employee = require('./models/Employee');
const Admin = require('./models/Admin');
const Bus = require('./models/Bus');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log("Connected to MongoDB");

        // Insert 20 fake employee entries
        const employees = [];
        for (let i = 1; i <= 20; i++) {
            employees.push({
                firstName: `Employee${i}`,
                lastName: `Last${i}`,
                email: `employee${i}@jsw.com`,
                password: `password${i}`,
                position: `Position${i}`,
                department: `Department${i}`,
            });
        }
        await Employee.insertMany(employees);
        console.log("Inserted 20 fake employees");

        // Insert 5 fake admin entries
        const admins = [];
        for (let i = 1; i <= 5; i++) {
            admins.push({
                email: `admin${i}@jsw.com`,
                password: `adminpassword${i}`,
            });
        }
        await Admin.insertMany(admins);
        console.log("Inserted 5 fake admins");

        // Insert 10 fake bus entries
        const buses = [];
        for (let i = 1; i <= 10; i++) {
            buses.push({
                busNumber: `Bus${i}`,
                driverName: `Driver${i}`,
                route: `Route${i}`,
                capacity: 50,  // You can change the capacity as needed
                startTime: `08:00`,
                endTime: `09:00`,
            });
        }
        await Bus.insertMany(buses);
        console.log("Inserted 10 fake buses");

        // Close the connection after insertion
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error inserting fake data:', err);
    });
