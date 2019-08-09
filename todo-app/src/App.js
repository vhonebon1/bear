import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import update from 'immutability-helper'
import TodosDisplay from './components/TodosDisplay.jsx'
import Admin from './components/Admin.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      inputValue: '',
      title: "",
      url: "",
      selectedVideo: ""
    }
  }

  getTodos() {
    axios.get('/api/v1/todos')
    .then(response => {
      this.setState({todos: response.data})
    })
    .catch(error => console.log(error))
  }

  createTodo = (title, url) => {
    axios.post('/api/v1/todos', {todo: {title: title, url: url}})
    .then(response => {
      const todos = update(this.state.todos, {
        $splice: [[0, 0, response.data]]
      })
      this.setState({ todos: todos, inputValue: "", title: "", url: "" })
    })
    .catch(error => console.log(error))
  }

  handleChangeTitle = (e) => {
    console.log('yo')
    this.setState({title: e.target.value});
  }

  handleChangeUrl = (e) => {
    this.setState({url: e.target.value});
  }

  handleSelectedVideo = (video) => {
    this.setState({ selectedVideo: video })
  }

  clearSelectedVideo = () => {
    this.setState({ selectedVideo: null })
  }

  updateTodo = (title, url, id) => {
    axios.put(`/api/v1/todos/${id}`, {todo: {title: title, url: url}})
    .then(response => {
      const todoIndex = this.state.todos.findIndex(x => x.id === response.data.id)
      const todos = update(this.state.todos, {
        [todoIndex]: {$set: response.data}
      })
      this.setState({ todos: todos })
    })
    .catch(error => console.log(error))
  }

  deleteTodo = (id) => {
    axios.delete(`/api/v1/todos/${id}`)
    .then(response => {
      const todoIndex = this.state.todos.findIndex(x => x.id === id)
      const todos = update(this.state.todos, {
        $splice: [[todoIndex, 1]]
      })
      this.setState({ todos: todos })
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getTodos()
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact render={(props) => (
            <TodosDisplay
              todos={this.state.todos}
              updateTodo={this.updateTodo}
              handleSelectedVideo={this.handleSelectedVideo}
            />
          )} />
          <Route path='/tommy-admin' exact render={(props) => (
            <Admin
              todos={this.state.todos}
              title={this.state.title}
              url={this.state.url}
              createTodo={this.createTodo}
              updateTodo={this.updateTodo}
              deleteTodo={this.deleteTodo}
            />
          )} />
        </Switch>
      </Router>
    );
  }
}

export default App;
