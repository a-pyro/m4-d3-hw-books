import React, { Component } from 'react';
import { Container, Row, ListGroup } from 'react-bootstrap';
import SingleComment from './SingleComment';

export default class CommentList extends Component {
  state = {
    comments: [],
  };

  /* componentDidMount = async () => {
    // console.log(this.props.asin);
    try {
      const resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUyMDNjNDg5YzI2ZjAwMTU3ZjljNDMiLCJpYXQiOjE2MTU5ODgzMzUsImV4cCI6MTYxNzE5NzkzNX0.ZkirlemsOm9gKIdP1GliGmMvD2oYPJDMHyPyrTjZkUU',
          },
        }
      );

      if (resp.ok) {
        console.log('resp ok');
        const data = await resp.json();
        // console.log(data);
        this.setState({ comments: data });
        console.log(this.state.comments);
      } else {
        console.log('resp not ok');
      }
    } catch (error) {
      console.log(error);
    }
  }; */

  render() {
    return (
      <Container fluid>
        <h5>Comment Area</h5>

        <Row className='justify-content-center'>
          <ListGroup>
            {this.state.comments.map((comm) => (
              <SingleComment comment={comm} key={comm._id} />
            ))}
          </ListGroup>
        </Row>
      </Container>
    );
  }
}
