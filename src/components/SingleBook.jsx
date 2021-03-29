import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import styles from '../styles/SingleBook.module.css';

export default class SingleBook extends Component {
  state = {
    selected: false,
    asin: '',
  };

  handleClick = () => {
    // console.log(e);
    this.setState({
      selected: !this.state.selected,
      asin: this.props.book.asin,
    });
  };

  render() {
    const {
      book: { img, title },
    } = this.props;

    return (
      <Card onClick={this.handleClick} className='h-100'>
        <Card.Img
          variant='top'
          className={styles.customCardImg}
          src={img}
          alt='book cover'
        />
      </Card>
    );
  }
}
