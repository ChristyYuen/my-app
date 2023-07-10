import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <NavBar/>
        <Home/>
        <h1>Welcome to My App!</h1>
        <p>This is the content of my application.</p>
    </div>
    </>
  );
}

export default App;
