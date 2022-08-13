import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Landing from './components/layout/Landing';
import Auth from './views/Auth';


function App() {
  return (
    <AuthContextProvider>
      
    </AuthContextProvider>
    <Router>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/login' render={props => <Auth {...props} authRoute='login'/>}/>
        <Route path='/register' render={props => <Auth {...props} authRoute='register'/>}/>

      </Switch>
    </Router>
  );
}

export default App;
