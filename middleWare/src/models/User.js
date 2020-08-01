const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    confirmed: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    })

UserSchema.pre('save', async function (next) {
    console.log(this.isNew)
    console.log(this)
    console.log('*********************')
    next()
})
UserSchema.post('save', function (doc) {
    console.log('inside post')
    console.log(this.isModified('name'))
    console.log(doc)
})
module.exports = mongoose.model('User', UserSchema)