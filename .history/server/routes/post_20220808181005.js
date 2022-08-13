const express = require('express')
const router = express.Router()

const Post = require('../models/Post')
const verifyToken = require('../middleware/auth')

//@route Get api / auth / pots
// @desc Get user
// @access Public

router.get('/', verifyToken, async (req, res) => {
    try {
        const posts = await Post.find({ user: req.userId }).populate('user',['username'])
        res.json({ success: true, posts })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
})


//@route POST api / auth / pots
// @desc Create user
// @access Public

router.post('/', verifyToken, async (req, res) => {
    const { title, description, url, status, } = req.body
    //simple validation
    if (!title)
        return res.status(400).json({ success: false, message: 'Title is required' })

    try {
        const newPost = new Post({
            title,
            description,
            url: url.startsWith('https://') ? url : `https://${url}`,
            status: status || 'TO LEARN',
            user: req.userId
        })
        await newPost.save()
        res.json({ success: true, message: 'Happy learning!', post: newPost })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
})

//@route Put api / auth / pots
// @desc updatePost user
// @access Public

router.put('/', verifyToken, async(req, res) => {
    const {title, description, url, status} = req.body
    
})
module.exports = router