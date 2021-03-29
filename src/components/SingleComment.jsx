import React, { Component } from 'react';
import { ListGroup, Button } from 'react-bootstrap';

export default class SingleComment extends Component {
  removeComment = async (commentID) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentID}`,
        {
          method: 'DELETE',

          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUyMDNjNDg5YzI2ZjAwMTU3ZjljNDMiLCJpYXQiOjE2MTU5ODgzMzUsImV4cCI6MTYxNzE5NzkzNX0.ZkirlemsOm9gKIdP1GliGmMvD2oYPJDMHyPyrTjZkUU',
          },
        }
      );
      if (response.ok) {
        console.log('resp ok');
        this.props.fetchComments();
      } else {
        console.log('resp not ok');
        // console.log(response.json());
      }
    } catch (error) {
      console.log(error);
    }

    // this.props.handleRemoveComments();
  };

  render() {
    // console.log(this.props.comment._id);

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
