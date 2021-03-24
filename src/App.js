import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import WarningSing from './components/WarningSing';
// import MyBadge from './components/MyBadge';
import BookList from './components/BookList';
import fantasy from './data/fantasy';

function App() {
  return (
    <>
      <BookList listOfBooks={fantasy} />
    </>
  );
}

export default App;
