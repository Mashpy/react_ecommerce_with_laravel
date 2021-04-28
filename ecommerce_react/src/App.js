import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import Header from './Header';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <h1>Ecommerce Project</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
