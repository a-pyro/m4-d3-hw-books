import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default class AddComment extends Component {
  componentDidMount = async () => {
    console.log(this.props.asin);
  };
  render() {
    return (
      <Container fluid>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Comment</Form.Label>
            <Form.Control type='text' placeholder='Leave a Comment ' />
          </Form.Group>

          <Form>
            <Form.Group controlId='exampleForm.SelectCustom'>
              <Form.Label>Leave a Comment</Form.Label>
              <Form.Control as='select' custom>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
