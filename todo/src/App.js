import React, { Component } from 'react';
import Sky from './Sky';
import Card from './Card'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Sky />
        <div className="container">
          <Card />
          <div className="followMe">
            <a className="icon"  rel="noopener noreferrer" href="https://github.com/lucagez/react-cloudy-todo-list" target="_blank"><i className="fab fa-github fa-3x"></i></a>
            <a className="icon" rel="noopener noreferrer" href="https://codepen.io/lucagez" target="_blank"><i className="fab fa-codepen fa-3x"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
