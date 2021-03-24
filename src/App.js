import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WarningSing from './components/WarningSing';
import MyBadge from './components/MyBadge';

function App() {
  return (
    <>
      <WarningSing message='Some Message' />
      <MyBadge />
    </>
  );
}

export default App;
