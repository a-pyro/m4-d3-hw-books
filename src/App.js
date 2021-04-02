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
import Footer from './components/Footer';

class App extends Component {
  state = {
    listOfBooks: [],
    category: '',
  };

  componentDidMount = () => {
    this.setState({ listOfBooks: fantasy });
  };

  handleCategoryChange = (cat) => {
    this.setState({ category: cat });
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log('App did update');
    if (this.state.category !== prevState.category) {
      let newCatToLoad;
      switch (this.state.category) {
        case 'Fantasy':
          newCatToLoad = fantasy;
          break;
        case 'History':
          newCatToLoad = history;

          break;

        case 'Horror':
          newCatToLoad = horror;

          break;
        case 'Romance':
          newCatToLoad = romance;

          break;
        case 'Scifi':
          newCatToLoad = scifi;

          break;

        default:
          break;
      }
    }
  };

  render() {
    return (
      <>
        <MyNav title='BookStore' />
        <Wellcome handleCategoryChange={this.handleCategoryChange} />
        <BookList listOfBooks={this.state.listOfBooks} />
        <Footer />
      </>
    );
  }
}

export default App;
