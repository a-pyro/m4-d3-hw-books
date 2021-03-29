import React, { Component } from 'react';
import { Container, Row, ListGroup, Alert } from 'react-bootstrap';
import SingleComment from './SingleComment';

export default class CommentList extends Component {
  render() {
    return (
      <Container fluid>
        <h5>Comment Area</h5>

        <Row className='justify-content-center'>
          <Alert variant='info'>
            {this.props.commentList.length === 0
              ? 'No Comments for this title'
              : `Comments for this title`}
          </Alert>

          <ListGroup>
            {this.props.commentList.map((comm) => (
              <SingleComment comment={comm} key={comm._id} />
            ))}
          </ListGroup>
        </Row>
      </Container>
    );
  }
}
