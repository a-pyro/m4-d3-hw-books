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
      <Container fluid className='mt-5'>
        <Row className='mx-0'>
          <Col md={6}>
            <Row>
              <Form.Group className='w-100'>
                <Form.Control
                  size='lg'
                  type='text'
                  placeholder='Filter Books'
                  onChange={this.filterBookList}
                  value={this.state.query}
                />
              </Form.Group>
              {/* if we don't have any match, show the Warning */}
              {listOfBooks.every(
                (book) =>
                  !book.title
                    .toLowerCase()
                    .includes(this.state.query.toLowerCase())
              ) ? (
                <WarningSing message='Book not found!' color='danger' />
              ) : (
                listOfBooks
                  .filter((el) =>
                    el.title
                      .toLowerCase()
                      .includes(this.state.query.toLowerCase())
                  )
                  .map((item) => (
                    <Col md={4} lg={3} key={item.asin} className='mb-3'>
                      <SingleBook book={item} />
                    </Col>
                  ))
              )}
            </Row>
          </Col>

          <Col md={4}>{/* comment area place */}</Col>
        </Row>
      </Container>
    );
  }
}

{
  /* <Row className='justify-content-center'>
  if we don't have any match, show the Warning
  {listOfBooks.every(
    (book) => !book.title.toLowerCase().includes(this.state.query.toLowerCase())
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
</Row>; */
}
