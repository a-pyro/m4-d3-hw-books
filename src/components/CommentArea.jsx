import { Modal, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import AddComment from './AddComment';
import CommentList from './CommentList';

export default class CommentArea extends Component {
  state = {
    clickedBookAsin: '',
  };

  // componentDidUpdate = (prevProp, prevState) => {
  //   console.log('comment area did update');
  // };

  render() {
    return (
      <>
        {<CommentList asin={this.state.clickedBookAsin} />}
        {<AddComment asin={this.state.clickedBookAsin} />}
      </>
    );
  }
}
