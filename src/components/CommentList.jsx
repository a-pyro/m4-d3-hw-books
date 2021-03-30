import React, { Component } from 'react';
import { Container, Row, ListGroup, Alert } from 'react-bootstrap';
import SingleComment from './SingleComment';

export default class CommentList extends Component {
  render() {
    return (
      <Container fluid>
        <Alert variant='info'>
          {this.props.commentList.length === 0
            ? 'No Comments for this title'
            : `Comments for this title`}
        </Alert>
        <Row className='justify-content-center'>
          <ListGroup>
            {this.props.commentList.map((comm) => (
              <SingleComment
                fetchComments={this.props.fetchComments}
                comment={comm}
                key={comm._id}
              />
            ))}
          </ListGroup>
        </Row>
      </Container>
    );
  }
}
