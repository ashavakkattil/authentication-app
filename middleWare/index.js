require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const User = require('./src/models/User')
const sgMail = require('@sendgrid/mail')
const userRoute = require('./src/routes/user')
const app = express()
app.use(cors())
app.use(bodyParser.json())
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('error', (err) => {
    console.log(err)
})
mongoose.connection.once('open', () => {
    console.log('connected to DB')
})

app.use('/users', userRoute)

app.listen(3000, () => {
    console.log('app started at 3000')
})