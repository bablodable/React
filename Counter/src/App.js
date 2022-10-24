import logo from './logo.svg';
import './App.css';
import ClassC from './ClassC';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <ClassC />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tupo Text
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mister Eduard
        </a>
      </header>
    </div>
  );
}

export default App;
