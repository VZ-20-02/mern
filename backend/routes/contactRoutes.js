const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', (req, res) => {
    User.find()
        // .then(users => res.render('contact', { users }))
        // Nun sagen wir unserem Server er soll die empfangen Daten als JSON zurücksenden
        .then(users => res.json(users))
        .catch(err => console.log(err))
})
router.post('/add', (req, res) => {
    console.log(req.body)
    const newUser = new User(req.body)
    newUser
        .save()
        .then(user => {
            console.log(user)
            // Man muss etwas antworten, sonst hängt der Browser / Postman
            // Hier geben wir den Statuscode für "Created" zurück
            res.sendStatus(201)
        })
        .catch(err => console.log(err))
})
router.get('/:id', (req, res) => {
    console.log(req.params.id)
    User.findById(req.params.id)
        .then(user => {
            console.log(user)
            // res.render('user', { user })
            res.json(user)
        })
        .catch(err => console.log(err))
})
router.put('/:id', (req, res) => {
    // const updatedUser = {
    //     name: req.body.name,
    //     tel: req.body.tel,
    //     email: req.body.email
    // }
    // das wäre ein Zwischenschritt, dann würden wir nach den req.params.id dieses Objekt übergeben
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(user => {
            console.log(user)
            res.sendStatus(204)
        })
        .catch(err => console.log(err))
})
router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(response => {
            console.log(response)
            res.sendStatus(204)
        })
        .catch(err => console.log(err))
})




module.exports = router