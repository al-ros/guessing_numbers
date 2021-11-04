import './App.css';
import Start from './components/Start';
import EnterName from './components/EnterName';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>

        <Start />

        <Switch>
          <Route path="/EnterName">
            <EnterName />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
