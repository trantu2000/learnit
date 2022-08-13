import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Auth from './views/Auth';
import AuthContextProvider from './contexts/authContext';
import ProtectedRoute from './components/routing/ProtectedRoute';
import Dashboard from './views/Dashboard';




function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/login' render={props => <Auth {...props} authRoute='login' />} />
          <Route exact path='/register' render={props => <Auth {...props} authRoute='register' />} />
          <ProtectedRoute exact path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </AuthContextProvider>

  );
}

export default App;