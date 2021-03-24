import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import SingleBook from './SingleBook';
import WarningSing from './WarningSing';
// import Warning from './Warning';

export default class BookList extends Component {
  state = {
    query: '',
  };

  filterBookList = (e) => {
    this.setState({ query: e.target.value });
  };
  render() {
    const { listOfBooks } = this.props;

    return (
      <Container className='mt-5'>
        <Row className='mx-0'>
          <Form.Group className='w-100'>
            <Form.Control
              size='lg'
              type='text'
              placeholder='Filter Books'
              onChange={this.filterBookList}
              value={this.state.query}
            />
          </Form.Group>
        </Row>
        <Row className='justify-content-center'>
          {listOfBooks.every(
            (book) =>
              !book.title.toLowerCase().includes(this.state.query.toLowerCase())
          ) ? (
            <WarningSing message='Book not found!' />
          ) : (
            listOfBooks
              .filter((el) =>
                el.title.toLowerCase().includes(this.state.query.toLowerCase())
              )
              .map((item) => (
                <Col xs={10} md={4} lg={3} key={item.asin} className='mb-3'>
                  <SingleBook book={item} />
                </Col>
              ))
          )}
        </Row>
      </Container>
    );
  }
}
