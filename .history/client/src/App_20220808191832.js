import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path='/'></Route>
    </Router>
  );
}

export default App;
