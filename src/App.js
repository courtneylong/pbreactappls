import logo from './logo.svg';
import './App.css';

import { Card, Title } from 'playbook-ui'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Card>{ <Title
          size={4}
          tag="h4"
          text="Look, it's a react app"
      />}</Card>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hey! It's a React App!
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
    </div>
  );
}

export default App;
