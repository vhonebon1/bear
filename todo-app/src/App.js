import React, { Component } from 'react';
import './App.css';
import TodosContainer from './components/TodosContainer.jsx'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Films</h1>
        </div>
        <TodosContainer />
      </div>
    );
  }
}

export default App;
