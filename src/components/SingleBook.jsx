import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
// import styled from 'styled-components';

export default class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleClick = () => {
    // console.log(e);
    this.setState({ selected: !this.state.selected });
  };
  render() {
    const {
      book: { img, title },
    } = this.props;

    return (
      <Card onClick={this.handleClick} className='h-100'>
        <Card.Img
          variant='top'
          className='img-fluid'
          src={img}
          alt='book cover'
        />
        <Card.Body className={this.state.selected ? 'bg-info' : ''}>
          <Card.Title>{title ?? 'Some Title'}</Card.Title>
          {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        </Card.Body>
      </Card>
    );
  }
}
