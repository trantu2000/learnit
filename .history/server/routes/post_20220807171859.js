const express = require('express')
const router = express.Router()

const Post =  require('../models/Post')

//@route POST api / auth / pots
// @desc Create user
// @access Public

router.post('/', async(req, res) =>{
    const{title, description, url, status} = res.body
    //simple validation
    
})