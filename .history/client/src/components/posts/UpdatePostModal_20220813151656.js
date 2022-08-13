import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { PostContext } from '../../contexts/PostContext';

const AddPostModal = () => {
    //Context
    const {
        postState: { post },
        showUpdatePostModal,
        setShowUpdatePostModal,
        //updatePost,
        setShowToast
    } = useContext(PostContext)


    //State
    const [updatePost, setUpdatePost] = useState(post)

    const { title, description, url } = updatePost
    // console.log(newPost);

    const onChangeUpdatePostForm = event => {
        setUpdatePost({ ...updatePost, [event.target.name]: event.target.value })
    }


    // const closeDialog = () => {
    //     resetAddPostData()
    // }

    const onSubmit = async event => {
        event.preventDefault()
        const { success, message } = await updatePost(updatePost)
        //resetAddPostData()
        //setShowToast({ show: true, message, type: success ? 'success' : 'danger' })


    }

    // const resetAddPostData = () => {
    //     setNewPost({
    //         title: '',
    //         description: '',
    //         url: '',
    //         status: 'TO LEARN'
    //     })
    //     setShowAddPostModal(false)
    // }
    return (
        <Modal show={showUpdatePostModal} >
            <Modal.Header closeButton>
                <Modal.Title>Making progress?</Modal.Title>
            </Modal.Header>
            <Form onSubmit={onSubmit}>
                <Modal.Body>
                    <Form.Group className='mb-1'>
                        <Form.Control
                            type='text'
                            placeholder='Title'
                            name='title'
                            required aria-describedby='title-help'
                            value={title}
                            onChange={onChangeUpdatePostForm}
                        />
                        <Form.Text id='title-help' muted>Required</Form.Text>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Control
                            as='textarea'
                            rows={3}
                            placeholder='Description'
                            name='description'
                            value={description}
                            onChange={onChangeUpdatePostForm}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type='text'
                            placeholder='URL'
                            name='url'
                            value={url}
                            onChange={onChangeUpdatePostForm}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type='text'
                            placeholder='URL'
                            name='url'
                            value={url}
                            onChange={onChangeUpdatePostForm}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' >Cancel</Button>
                    <Button variant='primary' type='submit'>LearnIt</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default AddPostModal