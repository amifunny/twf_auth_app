import './App.css';
import {SignIn,SignUp} from './AuthBox';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import UserDetails from './UserDetails';

function App() {
  return (
    <div>
      <header className="App-header">
          The TWF App
      </header>
      <Router>
          <Switch>
               {/* URL paths react listens to */}
              <Route exact path='/' component={Dashboard} />
              <Route path='/edit-details' component={UserDetails} />
              <Route path='/signup' component={SignUp} />
              <Route path='/signin' component={SignIn} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
