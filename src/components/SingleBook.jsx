import React from 'react';
import { Card } from 'react-bootstrap';

export default function SingleBook({ img, title }) {
  return (
    <Card>
      <Card.Img variant='top' src={img} alt='book cover' />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
    </Card>
  );
}
