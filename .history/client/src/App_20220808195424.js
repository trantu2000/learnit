import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './components/layout/Landing';
import Auth from './views/Auth';
import LoginForm from './components/auth/LoginForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path='/login' render={props => <Auth {...props} authRoute='login'/>}/>
        <Route exact path='/register' render={props => <Auth {...props} authRoute='register'/>}/>
        <Route exact path='/login' element={<LoginForm/>/>
        <Route exact path='/register' />
      </Routes>
    </Router>
  );
}

export default App;
