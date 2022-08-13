import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AddPostModal =()=> {
  return (
    <Modal show={true}>
        <Modal.Header closeButton>
            <Modal.Title>What do you want to learn?</Modal.Title>
        </Modal.Header>
        <Form>
            <Modal.Body>
                <Form.Group>
                    <Form.Control type='text' placeholder='Title' name='title' required aria-describedby='title-help'/>
                    <Form.Text id='title-help'>Required</Form.Text>
                </Form.Group>
            </Modal.Body>
        </Form>
    </Modal>
  )
}

export default AddPostModal