import './App.css';

import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'

import { Home } from './components/home/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
