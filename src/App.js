// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import bunny from './components/bunny';
import 'tailwindcss/tailwind.css';

function App() {
  
  return (
    <>
    <div className="App">
        <NavBar/>
        <br />
        <br />
        <br />
        <Home/>
        {bunny}
        <h1>Welcome to My App!</h1>
        <p>This is the content of my application.</p>
    </div>
    </>
  );
}

export default App;
