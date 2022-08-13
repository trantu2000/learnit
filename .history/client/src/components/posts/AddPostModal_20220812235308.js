import React from 'react';
import Modal from 'react-bootstrap/Modal';

const AddPostModal =()=> {
  return (
    <Modal show={true}>
        <Modal.Header>
            <Modal.Title>What do you want to learn?</Modal.Title>
        </Modal.Header>
    </Modal>
  )
}

export default AddPostModal