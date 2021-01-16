import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './Components/Header';
import Login from './Components/Login';
import Main from './Components/Main';
import Footer from './Components/Footer';
import CountryExplorer from './Components/CountryExplorer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/login'>
            <Header />
            <Login />
            <Footer />
          </Route>
          <Route path='/places'>
            <Header />
            <CountryExplorer />
            <Footer />
          </Route>
          <Route path='/'>
            <Header />
            <Main />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
