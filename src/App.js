import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component = {() => <Home />} />
        <Route path="/add">
          <h3>Add Component</h3>
        </Route>
        <Route path="/edit/:id">
          <h3>Edit Component</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
