import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

export default function Wellcome() {
  return (
    <Jumbotron fluid className='py-2'>
      <Container>
        <div className='d-flex flex-column align-items-center'>
          <h1>Wellcome to the Bookstore</h1>
          <p>This is a little introduction I had to write</p>
        </div>
      </Container>
    </Jumbotron>
  );
}
