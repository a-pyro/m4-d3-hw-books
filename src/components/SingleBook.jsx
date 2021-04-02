import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
// import styles from '../styles/SingleBook.module.css';
import styled from 'styled-components';

export default class SingleBook extends Component {
  state = {
    isClicked: false,
  };

  handleClick = (e) => {
    console.log(e.target);
    this.props.handleBookClick(this.props.book.asin);
  };

  render() {
    // console.log(asin);
    return (
      <StyledCard>
        <Card onClick={this.handleClick} className='h-100'>
          <Card.Img variant='top' src={this.props.book.img} alt='book cover' />
        </Card>
      </StyledCard>
    );
  }
}

const StyledCard = styled.div`
  height: 30vh;
  background-color: blue;

  Card {
    background-color: green;
  }
`;
