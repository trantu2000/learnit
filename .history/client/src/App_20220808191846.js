import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Landing from './components/Landing';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Landing}></Route>
    </Router>
  );
}

export default App;
