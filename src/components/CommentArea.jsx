import { Modal, Container, Row, Col, Button } from 'react-bootstrap';
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Comments</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {<CommentList asin={asin} />}
          {<AddComment asin={asin} />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
