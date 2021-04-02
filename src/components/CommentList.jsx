import React, { Component } from 'react';
import { Row, ListGroup, Alert, Col } from 'react-bootstrap';
import SingleComment from './SingleComment';

export default class CommentList extends Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            <Alert variant='info' className='w-100'>
              {this.props.commentList.length === 0
                ? `No Comments for ${this.props.bookTitle}`
                : `Comments for ${this.props.bookTitle}`}
            </Alert>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col>
            <ListGroup>
              {this.props.commentList.map((comm) => (
                <SingleComment
                  fetchComments={this.props.fetchComments}
                  comment={comm}
                  key={comm._id}
                />
              ))}
            </ListGroup>
          </Col>
        </Row>
      </>
    );
  }
}
