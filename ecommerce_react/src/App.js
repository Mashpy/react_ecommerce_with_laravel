import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import {Header} from './Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Ecommerce Project</h1>
      <button>Normal Button</button>
      <Button>Bootstrap button</Button>    
    </div>
  );
}

export default App;
