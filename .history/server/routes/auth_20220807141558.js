const express = require('express');
const router = express.router()

const User = require('../models/User')

router.get('/', (req,res) => res.send('User route'))

module.exports = router
