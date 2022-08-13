import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Auth from './views/Auth';
import AuthContextProvider from './contexts/authContext';
import Dashboard from './views/Dashboard';


function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/login' render={props => <Auth {...props} authRoute='login' />} />
          <Route path='/register' render={props => <Auth {...props} authRoute='register' />} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </AuthContextProvider>

  );
}

export default App;
