import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { PostContext } from '../../contexts/PostContext';

const AddPostModal = () => {
    //Context
    const { showAddPostModal, setShowAddPostModal } = useContext(PostContext)

    //State
    const [newPost, setNewPost] = useState({
        title: '',
        description: '',

    })

    const closeDialog = () => {
        setShowAddPostModal(false)
    }
    return (
        <Modal show={showAddPostModal} onHide={closeDialog}>
            <Modal.Header closeButton>
                <Modal.Title>What do you want to learn?</Modal.Title>
            </Modal.Header>
            <Form>
                <Modal.Body>
                    <Form.Group className='mb-1'>
                        <Form.Control type='text' placeholder='Title' name='title' required aria-describedby='title-help' />
                        <Form.Text id='title-help' muted>Required</Form.Text>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Control as='textarea' rows={3} placeholder='Description' name='description' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type='text' placeholder='URL' name='url' />
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

export default AddPostModal