import logo from './logo.svg';
import './App.css';
import Ccomponent from './Ccomponent';
import Fcomponent from './Fcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Ccomponent />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Привет Димоооооооооооон!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          БОБ
        </a>
      </header>
    </div>
  );
}

export default App;
