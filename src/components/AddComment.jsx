import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default class AddComment extends Component {
  state = {
    comment: '',
    rate: 1,
    elementId: this.props.asin,
  };
  handleChange = (e) => {
    const propName = e.currentTarget.id;

    // console.log(e.currentTarget);

    this.setState({
      ...this.state,
      [propName]: e.currentTarget.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
        {
          method: 'POST',
          body: JSON.stringify(this.state),
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUyMDNjNDg5YzI2ZjAwMTU3ZjljNDMiLCJpYXQiOjE2MTU5ODgzMzUsImV4cCI6MTYxNzE5NzkzNX0.ZkirlemsOm9gKIdP1GliGmMvD2oYPJDMHyPyrTjZkUU',
          },
        }
      );
      if (response.ok) {
        console.log('resp ok');
      } else {
        console.log('resp not ok');
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container fluid>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Comment</Form.Label>
            <Form.Control
              required
              onChange={this.handleChange}
              id='comment'
              value={this.state.comment}
              type='text'
              placeholder='Leave a Comment '
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Leave rating</Form.Label>
            <Form.Control
              required
              onChange={this.handleChange}
              id='rate'
              value={this.state.rate}
              as='select'
              custom
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>

          <Button variant='outline-info' type='submit' className='w-100'>
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
