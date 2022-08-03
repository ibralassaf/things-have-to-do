const mongoose = require('mongoose');

//DB Schema
const schema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    }

});

//DB Model export
module.exports = mongoose.model('Task', schema);