import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './components/layout/Landing';
import login from './components/auth/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' component={Landing}></Route>
        <Route exact path='/login' component={Login}></Route>
      </Routes>
    </Router>
  );
}

export default App;
