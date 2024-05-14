const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Please add a name'],
        trim:true
    },
    artist:{
        type: String
    },
    group: {
        type: String
    }
})

module.exports = mongoose.model('Book', BookSchema)