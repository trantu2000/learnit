import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { PostContext } from '../../contexts/PostContext';

const UpdatePostModal = () => {
    //Context
    const {
        postState: { post },
        showUpdatePostModal,
        setShowUpdatePostModal,
        updatePost,
        setShowToast
    } = useContext(PostContext)


    //State
    const [updatedPost, setUpdatePost] = useState(post)

    const { title, description, url, status } = updatedPost
    // console.log(newPost);

    const onChangeUpdatePostForm = event => {
        setUpdatePost({ ...updatedPost, [event.target.name]: event.target.value })
    }


    const closeDialog = () => {
        setShowUpdatePostModal(false)
    }

    const onSubmit = async event => {
        event.preventDefault()
        const { success, message } = await updatePost(updatedPost)
        setShowUpdatePostModal(false)
        
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
        <Modal show={showUpdatePostModal} onHide={closeDialog}>
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
                            as='select'
                            name='status'
                            value={status}
                            onChange={onChangeUpdatePostForm}
                        >
                            <option value='TO LEARN'>TO LEARN</option>
                            <option value='LEARNING'>LEARNING</option>
                            <option value='LEARNED'>LEARNED</option>
                        </Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={closeDialog}>Cancel</Button>
                    <Button variant='primary' type='submit'>LearnIt</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default UpdatePostModal