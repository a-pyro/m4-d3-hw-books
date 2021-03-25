import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

export default class CommentList extends Component {
  state = {
    comments: [],
  };

  componentDidMount = async () => {
    console.log(this.props.asin);
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
    } else {
      console.log('resp not ok');
    }
  };
  render() {
    return (
      <Container fluid>
        <h5>Comment Area</h5>
        <Row className='justify-content-center'></Row>
      </Container>
    );
  }
}
