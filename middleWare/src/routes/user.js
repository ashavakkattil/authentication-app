const mongoose = require('mongoose')
const express = require('express')
const User = require('../models/User')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello world!')
})
router.post('/', (req, res) => {
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
router.put('/:id', (req, res) => {
    User.findById(req.params.id, { new: true }, async (error, user) => {
        if (!error) {
            user.save(req.body)
            res.send(user)
        } else {
            console.log(error)
        }
    })
})

/* Google login */
/* router.get("/auth/google", passport.authenticate("google", {
    scope: ["profile", "email"]
})
); */

module.exports = router