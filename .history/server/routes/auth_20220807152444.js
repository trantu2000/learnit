const express = require('express');
const router = express.Router()

const User = require('../models/User')

// router.get('/', (req,res) => res.send('User route'))

// @route POST api/quth/register
// @desc Register user
// @access Public
router.post('/', async(req, res) =>{
    const {username, password} = req.body

    //simple validaton
    if(!username || !password)
    return res.status(400).json({success: false,message: 'Missing username or/and password'})
})


module.exports = router
