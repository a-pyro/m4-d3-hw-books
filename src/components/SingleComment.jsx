import React, { Component } from 'react';
import { ListGroup, Button } from 'react-bootstrap';

export default class SingleComment extends Component {
  removeComment = (commentID) => {
    console.log(commentID);
  };

  render() {
    console.log(this.props.comment._id);

    return (
      <>
        <ListGroup.Item className=''>
          {this.props.comment.comment} by {this.props.comment.author} who rated{' '}
          {this.props.comment.rate}/5!
          <Button
            onClick={() => this.removeComment(this.props.comment._id)}
            variant='danger'
          >
            Remove
          </Button>
        </ListGroup.Item>
      </>
    );
  }
}
