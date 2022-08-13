import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './components/layout/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' component={Landing}></Route>
      </Routes>
    </Router>
  );
}

export default App;
