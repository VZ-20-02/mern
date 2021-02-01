import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Add from './components/Add';
import SingleContact from './components/SingleContact';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contacts" component={Contacts} exact />
          <Route path="/contacts/:id" component={SingleContact} />
          <Route path="/add" component={Add} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
