const express = require('express');
const router = express.Router()

const User = require('../models/User')

// router.get('/', (req,res) => res.send('User route'))

// @route POST api/quth/register
// @desc Register user
// @access Public
router.post('/', async(req, res) =>{
    const {username, password} = req.body
})


module.exports = router
