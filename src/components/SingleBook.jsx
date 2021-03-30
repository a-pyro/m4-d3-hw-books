import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import styles from '../styles/SingleBook.module.css';

export default class SingleBook extends Component {
  state = {
    isClicked: false,
  };

  handleClick = (e) => {
    console.log(e.target);
    this.props.handleBookClick(this.props.book.asin);
  };

  render() {
    const {
      book: { img, asin },
    } = this.props;

    // console.log(asin);
    return (
      <Card onClick={this.handleClick} className='h-100'>
        <Card.Img
          variant='top'
          className={styles.customCardImg}
          src={this.props.book.img}
          alt='book cover'
        />
      </Card>
    );
  }
}
