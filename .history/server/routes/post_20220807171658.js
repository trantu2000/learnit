const express = require('express')
const router = express.Router()

const Post =  require('../models/Post')

//@route POST api / auth / pots
// @desc login user
// @access Public