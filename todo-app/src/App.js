import React, { Component } from 'react';
import './App.scss';
import axios from 'axios'
import update from 'immutability-helper'
import HomePage from './components/HomePage.jsx'
import Admin from './components/Admin.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      inputValue: "",
      title: "",
      url: "",
      selectedVideo: false,
      hasFilms: false
    }
  }

  getTodos() {
    axios.get('/api/v1/todos')
    .then(response => {
      this.setFilms(response.data);
    })
    .catch(error => console.log(error))
  }

  setFilms = (response) => {
    const smallTiles = response.filter((item) => !item.large);
    const largeTile = response.filter((item) => item.large)
    console.log(response.filter((item) => item.large))
    this.setState({ todos: response,
                    large: largeTile[0],
                    small: smallTiles,
                    hasFilms: true })
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
    this.setState({title: e.target.value});
  }

  handleChangeUrl = (e) => {
    this.setState({url: e.target.value});
  }

  handleSelectedVideo = (video) => {
    this.setState({ selectedVideo: video })
  }

  handleClearSelected = () => {
    this.setState({ selectedVideo: false })
  }

  clearSelectedVideo = () => {
    this.setState({ selectedVideo: null })
  }

  updateTodo = (title, url, id, large) => {
    axios.put(`/api/v1/todos/${id}`, {todo: {title: title, id: id, url: url, large: large}})
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
    console.log(this.state.todos)
    return (
      <Router>
        <Switch>
          <Route path='/' exact render={(props) => (
            <HomePage
              largeTile={this.state.large}
              smallTiles={this.state.small}
              updateTodo={this.updateTodo}
              handleSelectedVideo={this.handleSelectedVideo}
              handleClearSelected={this.handleClearSelected}
              selectedVideo={this.state.selectedVideo}
              hasFilms={this.state.hasFilms}
            />
          )} />
          <Route path='/tommy-admin' exact render={(props) => (
              <Admin
                todos={this.state.todos.length > 0 && this.state.todos}
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
