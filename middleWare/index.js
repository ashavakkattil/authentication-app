require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const User = require('./src/models/User')
const sgMail = require('@sendgrid/mail')

const app = express()

app.use(bodyParser.json())
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('error', (err) => {
    console.log(err)
})
mongoose.connection.once('open', () => {
    console.log('connected to DB')
})
app.get('/users', (req, res) => {
    res.send('Hello world!')
})
app.post('/users', (req, res) => {
    User.create(req.body, (error, user) => {
        if (!error) {
            const url = 'http://localhost:3000/users'
            sgMail.setApiKey(process.env.SENDGRID_API_KEY)
            const msg = {
                to: 'ammose89@gmail.com',
                from: 'thetrailsandtales@gmail.com',
                subject: 'Sending with SendGrid is Fun',
                text: 'and easy to do anywhere, even with Node.js',
                html: `<strong>Click to confirm ${url}</strong>`,
              };
              sgMail.send(msg).then(() => {
                  console.log('Mail sent')
              }).catch(error => {
                  console.log(error)
              })
            res.send(user)
        }
    })
})
app.put('/users/:id', (req, res) => {
    User.findById(req.params.id, { new: true }, async (error, user) => {
        if (!error) {
            user.save(req.body)
            res.send(user)
        } else {
            console.log(error)
        }
    })
})
app.listen(3000, () => {
    console.log('app started at 3000')
})