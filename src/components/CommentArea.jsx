import React, { Component } from 'react';
import AddComment from './AddComment';
import CommentList from './CommentList';

export default class CommentArea extends Component {
  state = {
    commentList: [],
  };

  componentDidUpdate = async (prevProp) => {
    console.log('COMMENT AREA DID UPDATE');
    if (prevProp.bookAsin !== this.props.bookAsin) {
      try {
        const resp = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${this.props.bookAsin}`,
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUyMDNjNDg5YzI2ZjAwMTU3ZjljNDMiLCJpYXQiOjE2MTU5ODgzMzUsImV4cCI6MTYxNzE5NzkzNX0.ZkirlemsOm9gKIdP1GliGmMvD2oYPJDMHyPyrTjZkUU',
            },
          }
        );

        if (resp.ok) {
          // console.log('resp ok');
          const data = await resp.json();
          // console.log(data);
          this.setState({ commentList: data });
          console.log(this.state.commentList);
        } else {
          // console.log('resp not ok');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    return (
      <>
        <CommentList commentList={this.state.commentList} />
        <AddComment asin={this.props.bookAsin} />
      </>
    );
  }
}
