import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';

export default class BookList extends Component {
  render() {
    const { listOfBooks } = this.props;
    // console.log(listOfBooks);
    return (
      <Container className='mt-5'>
        <Row>
          {listOfBooks.map((item) => (
            <Col xs={12} md={3} key={item.asin}>
              <SingleBook book={item} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
