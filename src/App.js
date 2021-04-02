import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import WarningSing from './components/WarningSing';
// import MyBadge from './components/MyBadge';
import BookList from './components/BookList';
import fantasy from './data/fantasy';
import history from './data/history.json';
import horror from './data/horror.json';
import romance from './data/romance.json';
import scifi from './data/scifi.json';
import MyNav from './components/MyNav';
import Wellcome from './components/Wellcome';
// import Footer from './components/Footer';
import { Spinner } from 'react-bootstrap';

class App extends Component {
  state = {
    listOfBooks: [],
    category: '',
    isLoading: true,
  };

  componentDidMount = () => {
    this.setState({ listOfBooks: fantasy, isLoading: false });
  };

  handleCategoryChange = (cat) => {
    this.setState({ category: cat, isLoading: false });
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log('App did update');
    if (prevState.category !== this.state.category) {
      let newCatToLoad;
      switch (this.state.category) {
        case 'fantasy':
          newCatToLoad = fantasy;
          break;
        case 'history':
          newCatToLoad = history;

          break;

        case 'horror':
          newCatToLoad = horror;

          break;
        case 'romance':
          newCatToLoad = romance;

          break;
        case 'scifi':
          newCatToLoad = scifi;
          break;

        default:
          newCatToLoad = fantasy;

          break;
      }
      this.setState({
        ...this.state,
        listOfBooks: newCatToLoad,
        isLoading: false,
      });
    }
  };

  render() {
    return (
      <>
        <MyNav title='BookStore' />
        <Wellcome handleCategoryChange={this.handleCategoryChange} />
        {/* {this.state.isLoading && <Spinner animation='grow' />}
        {!this.state.isLoading && (
          <BookList listOfBooks={this.state.listOfBooks} />
        )} */}

        {this.state.isLoading ? (
          <Spinner animation='grow' />
        ) : (
          <BookList listOfBooks={this.state.listOfBooks} />
        )}
      </>
    );
  }
}

export default App;
