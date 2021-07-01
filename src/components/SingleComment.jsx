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
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUyMDNjNDg5YzI2ZjAwMTU3ZjljNDMiLCJpYXQiOjE2MjUxNDgyMDQsImV4cCI6MTYyNjM1NzgwNH0.3HhdK6t7oeXt5LpONAYiU2a_Ap043ucIpJxFfUQTVDA',
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
        <ListGroup.Item className='d-flex justify-content-between align-items-center'>
          <div>
            {this.props.comment.comment} by {this.props.comment.author} who
            rated {'⭐️'.repeat(parseInt(this.props.comment.rate))}
          </div>

          <Button
            onClick={() => this.removeComment(this.props.comment._id)}
            variant='warning'
            className='rounded-circle'
          >
            🗑
          </Button>
        </ListGroup.Item>
      </>
    );
  }
}
