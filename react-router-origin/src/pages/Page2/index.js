import logo from '../../logo.svg';
import './style.css';
import { Link } from 'react-router-dom';

export function PageTwo() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>

      <div className="App-line"></div>
      
      <main className="App-main">
        <p>
          Page 2
        </p>

        <Link to="/" className="App-link">
          Previous Page
        </Link>
      </main>
    </div>
  );
}
