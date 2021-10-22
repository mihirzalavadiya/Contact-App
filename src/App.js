import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <h3>Contact App</h3>
    </div>
  );
}

export default App;
