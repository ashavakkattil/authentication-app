const mongoose = require('mongoose')
const express = require('express')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const sgMail = require('@sendgrid/mail')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello world!')
})
router.post('/', (req, res) => {
    User.find({ email: req.body.email }, (error, user) => {
        if (error) {
            res.status(500).json({
                error: error.message
            })
        } else if (user.length) {
            res.json({
                message: 'Email already registered'
            })
        } else {
            var user = req.body
            const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY, { expiresIn: '20m' })
            const url = `${process.env.CLIENT_URL}/#/authenticate/${token}`
            sgMail.setApiKey(process.env.SENDGRID_API_KEY)
            const msg = {
                to: req.body.email,
                from: 'thetrailsandtales@gmail.com',
                subject: 'Sending with SendGrid is Fun',
                text: 'and easy to do anywhere, even with Node.js',
                html: `<strong>Click to confirm ${url}</strong>`,
            };
            sgMail.send(msg).then(() => {
                res.json({ message: 'Email has been sent' })
            }).catch(error => {
                console.log(error)
            })
        }
    })
})
router.get('/authenticate/:token', (req, res) => {
    jwt.verify(req.params.token, process.env.JWT_SECRET_KEY, (error, decodedToken) => {
        if (!error) {
            const user = decodedToken
            user.user.active = true
            User.create(user.user, (error, user) => {
                if (error) {
                    res.status(500).json({
                        message: error.message
                    })
                } else {
                    res.status(200).json({
                        message: 'User created',
                        data: user
                    })
                }
            })
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