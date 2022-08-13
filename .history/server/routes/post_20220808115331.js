const express = require('express')
const router = express.Router()

const Post = require('../models/Post')
const verifyToken = ('../middleware/auth.js')

//@route POST api / auth / pots
// @desc Create user
// @access Public

router.post('/', async (req, res) => {
    const { title, description, url, status,  } = req.body
    //simple validation
    if (!title)
        return res.status(400).json({ success: false, message: 'Title is required' })

    try {
        const newPost = new Post({
            title,
            description,
            url: url.startsWith('https://') ? url : `https://${url}`,
            status: status || 'TO LEARN',
            user: '62ef88ae4023b588679509e2'
        })
        await newPost.save()
        res.json({ success: true, message: 'Happy learning!', post: newPost })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
})
module.exports = router