const express = require('express')
const Author = require('../models/author')
const router = express.Router()


// All authours Route
router.get('/', (req, res) => {
    res.render('authors/index')
})

// new Author route

router.get('/new', (req, res) => {
    res.render('authors/new', { author: new Author() })
})

// create author route

router.post('/', (req, res) => {
    res.send('Create')
})

module.exports = router