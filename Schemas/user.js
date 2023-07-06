const mongoose = require('mongoose');


const userschema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    mail: {
        type: String,
        require:true
    },
    password: {
        type: String,
        require:true
    },
    createed: {
        type: Date,
        default: Date.now
    }
})

const usernodel = mongoose.model('user', userschema);

module.exports = usernodel;