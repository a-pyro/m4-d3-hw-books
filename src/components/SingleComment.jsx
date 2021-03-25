import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

export default class SingleComment extends Component {
  render() {
    // console.log(this.props);
    return (
      <ListGroup.Item className=''>
        {this.props.comment.comment} by {this.props.comment.author} who rated{' '}
        {this.props.comment.rate}/5!
      </ListGroup.Item>
    );
  }
}
