const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    active: {
        type: Boolean,
        default: false
    },
    googleId: String
},
    {
        timestamps: true
    })

module.exports = mongoose.model('User', UserSchema)