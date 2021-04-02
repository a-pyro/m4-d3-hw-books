import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import styles from '../styles/SingleBook.module.css';

export default class SingleBook extends Component {
  state = {
    isClicked: false,
  };

  handleClick = (e) => {
    this.props.handleBookClick(this.props.book.asin, this.props.book.title);
  };

  render() {
    // console.log(asin);
    return (
      <Card
        className={styles.customCardImg}
        onClick={this.handleClick}
        className='mb-3'
      >
        <Card.Img variant='top' src={this.props.book.img} alt='book cover' />
      </Card>
    );
  }
}
