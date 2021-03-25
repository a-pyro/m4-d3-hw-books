import { Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import AddComment from './AddComment';
import CommentList from './CommentList';

export default function CommentArea(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { asin } = props;

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Comment Area
      </Button>

      <Modal scrollable show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Comments</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {<AddComment asin={asin} />}
          {<CommentList asin={asin} />}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='outline-danger'
            className='w-100'
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
