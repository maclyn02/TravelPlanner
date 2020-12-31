import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/login'>
            <Header />
            <div>Login</div>
          </Route>
          <Route path='/'>
            <Header />
            Home
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
