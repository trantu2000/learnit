const express = require('express');
const router = express.Router();

const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

const User = require('../models/User')

// router.get('/', (req,res) => res.send('User route'))

// @route POST api/quth/register
// @desc Register user
// @access Public
router.post('/', async (req, res) => {
    const { username, password } = req.body

    //simple validaton
    if (!username || !password)
        return res
            .status(400)
            .json({ success: false, message: 'Missing username or/and password' })
    try {
        //check for existing user
        const user = await User.findOne({ username: username })
        if (user)
            return res.status(400).json({ success: false, message: 'Username already taken' })

        //All good
        const hashedPassword = await argon2.hash(password)
        const newUser = new User({ username, password: hashedPassword })
        await newUser.save()

        //Return token
        const accessToken = jwt.sign(
            {
                userId: newUser._id,
            },
            process.env.ACCess_TOKEN_SECRET
        )
        res.json({success: true, message: 'User create successfully'})

    } catch (error) {

    }
})


module.exports = router
