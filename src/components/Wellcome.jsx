import React, { Component } from 'react';

import { Jumbotron, Container, Form } from 'react-bootstrap';

export default class Wellcome extends Component {
  handleChange = (e) => {
    const category = e.target.value.toLowerCase();
    console.log(category);
    this.props.handleCategoryChange(category);
  };
  render() {
    return (
      <Jumbotron fluid className='py-2'>
        <Container>
          <div className='d-flex flex-column align-items-center'>
            <h1>Wellcome to the Bookstore</h1>
            <p>Select a book category</p>
            <Form>
              <Form.Group>
                <Form.Control onChange={this.handleChange} as='select' custom>
                  <option>Fantasy</option>
                  <option>History</option>
                  <option>Horror</option>
                  <option>Romance</option>
                  <option>Scifi</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </div>
        </Container>
      </Jumbotron>
    );
  }
}
