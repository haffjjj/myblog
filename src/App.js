import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Blog under maintenance, -jon
          </p>
          <a
            className="App-link"
            href="https://fb.com/haffjjj"
            target="_blank"
            rel="noopener noreferrer"
          >
            fb
          </a>
        </header>
      </div>
    );
  }
}

export default App;
