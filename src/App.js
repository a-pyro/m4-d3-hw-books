import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import WarningSing from './components/WarningSing';
// import MyBadge from './components/MyBadge';
import BookList from './components/BookList';
import fantasy from './data/fantasy';
import MyNav from './components/MyNav';
import Wellcome from './components/Wellcome';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <MyNav title='BookStore' />
      <Wellcome />
      <BookList listOfBooks={fantasy} />

      <Footer />
    </>
  );
}

export default App;
