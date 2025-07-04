const mongoose = require('mongoose');

const BusSchema = new mongoose.Schema({
    busNo: { type: String, required: true }, 
    startLocation: { type: String, required: true },
    startTime: { type: String, required: true },
    endLocation: { type: String, required: true },
    endTime: { type: String, required: true },
    capacity: { type: Number, required: true },
});

module.exports = mongoose.model('Bus', BusSchema);
