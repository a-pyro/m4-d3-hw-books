import React, { Component } from 'react';
import AddComment from './AddComment';
import CommentList from './CommentList';
import styles from '../styles/CommentArea.module.css';
import { Spinner, Container } from 'react-bootstrap';
export default class CommentArea extends Component {
  state = {
    commentList: [],
    bookName: '',
    isLoading: false,
    isError: false,
    errorMsg: '',
  };

  fetchComments = async () => {
    try {
      this.setState({ isLoading: true });
      const resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.bookAsin}`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUyMDNjNDg5YzI2ZjAwMTU3ZjljNDMiLCJpYXQiOjE2MTcyMDE4NjMsImV4cCI6MTYxODQxMTQ2M30.ru_9O8RdNoCPKpFG-dgtPC8cqI3OozYpyQArNhtE9yg',
          },
        }
      );

      if (resp.ok) {
        // console.log('resp ok');
        const data = await resp.json();
        console.log(data);
        this.setState({ commentList: data, isLoading: false });
        // console.log(this.state.commentList);
      } else {
        // console.log('resp not ok');
      }
    } catch (error) {
      this.setState({ isError: true, errorMsg: error });
      console.log(error);
    }
  };

  componentDidUpdate = (prevProp) => {
    // console.log('COMMENT AREA DID UPDATE');

    if (prevProp.bookAsin !== this.props.bookAsin) {
      this.fetchComments();
    }
  };

  render() {
    return (
      <Container fluid className={styles.sticky}>
        {this.state.isLoading && (
          <div className='d-flex justify-content-center'>
            <Spinner animation='grow' />
          </div>
        )}
        {!this.state.isLoading && (
          <CommentList
            bookTitle={this.props.bookTitle}
            fetchComments={this.fetchComments}
            commentList={this.state.commentList}
          />
        )}
        <AddComment
          fetchComments={this.fetchComments}
          asin={this.props.bookAsin}
        />
      </Container>
    );
  }
}
