// import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import AddContact from './components/AddContact';

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component = {() => <Home />} />
        <Route path="/add">
          <AddContact />
        </Route>
        <Route path="/edit/:id">
          <h3>Edit Component</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
