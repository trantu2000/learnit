import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './components/Landing';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing}></Route>
      </Switch>
    </Router>
  );
}

export default App;
