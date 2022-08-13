const express = require('express')
const router = express.Router()

const Post = require('../models/Post')
const verifyToken = require('../middleware/auth')

//@route Get api / auth / pots
// @desc Get user
// @access Public

router.get('/', verifyToken, async (req, res) => {
    try {
        const posts = await Post.find({ user: req.userId }).populate('user', ['username'])
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

router.put('/:id', verifyToken, async (req, res) => {
    const { title, description, url, status } = req.body

    if (!title)
        return res
            .status(400)
            .json({ success: false, message: 'Title is required' })
    try {
        let updatePost = {
            title,
            description: description || '',
            url: (url.startsWith('https://') ? url : `https://${url}`) || '',
            status: status || 'TO LEARN'
        }

        const postUpdateCodition = { _id: req.params.id, user: req.userId }
        updatePost = await Post.findByIdAndUpdate(
            postUpdateCodition,
            updatePost,
            { new: true })


        //User not authorised to update post or post not found
        if (!updatePost)
            return res
                .status(401)
                .json({
                    success: false,
                    message: 'Post not found or user not authorised'
                })
        res.json({
            success: true,
            message: 'Excellent progress!',
            post: updatePost
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
})

//@route delete api / auth / pots
// @desc updatePost user
// @access Public
module.exports = router