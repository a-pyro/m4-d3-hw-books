import React from 'react';
import { Card } from 'react-bootstrap';

export default function SingleBook({ book: { img, title } }) {
  return (
    <Card>
      <Card.Img
        variant='top'
        className='img-fluid'
        src={img}
        alt='book cover'
      />
      <Card.Body>
        <Card.Title>{title ?? 'Some Title'}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
    </Card>
  );
}
