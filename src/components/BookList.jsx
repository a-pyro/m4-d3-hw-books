import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import SingleBook from './SingleBook';

export default class BookList extends Component {
  state = {
    query: '',
  };

  filterBookList = (e) => {
    this.setState({ query: e.target.value });
  };
  render() {
    const { listOfBooks } = this.props;

    // console.log(listOfBooks);
    return (
      <Container className='mt-5'>
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
        </Row>
        <Row>
          {listOfBooks
            .filter((el) =>
              el.title.toLowerCase().includes(this.state.query.toLowerCase())
            )
            .sort((a, b) => a.title - b.title)
            .map((item) => (
              <Col xs={12} md={3} key={item.asin}>
                <SingleBook book={item} />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}
