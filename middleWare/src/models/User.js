const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
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

UserSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (error, salt) => {
        if (error) {
            return next(error)
        } else {
            bcrypt.hash(this.password, salt, (err, hashedPassword) => {
                if (err) return next(err)
                this.password = hashedPassword
                next()
            })
        }
    })
})
module.exports = mongoose.model('User', UserSchema)