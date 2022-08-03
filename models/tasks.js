const mongoose = require('mongoose');

//DB Schema
const schema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Task', schema);