import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './Components/Header';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/login'>
            <Header />
            <Login />
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
