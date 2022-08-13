import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Landing/>}></Route>
        <Route path='/login' component={Login}></Route>
      </Routes>
    </Router>
  );
}

export default App;