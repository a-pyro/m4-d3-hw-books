import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import CommentArea from './CommentArea';

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
          className='img-fluid'
          src={img}
          alt='book cover'
        />
        <Card.Body>
          <Card.Title>{title ?? 'Some Title'}</Card.Title>
          <CommentArea asin={this.state.asin} />
        </Card.Body>
      </Card>
    );
  }
}
