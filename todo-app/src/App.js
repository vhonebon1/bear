import React, { Component } from 'react';
import './App.scss';
import axios from 'axios'
import update from 'immutability-helper'
import HomePage from './components/HomePage.jsx'
import Admin from './components/Admin.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const UPDATE_MESSAGE = "Your updates have been made.\n  Please check only one film is ticked as large"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      inputValue: "",
      title: "",
      url: "",
      large: null,
      selectedVideo: false,
      hasFilms: false,
      adminMessage: null
    }
  }

  componentDidUpdate = (nextProps, nextState) => {
    if (this.state.adminMessage !== null) {
      setTimeout(this.clearMessage, 3000)
    }
  }

  clearMessage = () => {
    this.setState({ adminMessage: null })
  }

  getTodos() {
    axios.get('/api/v1/todos')
    .then(response => {
      this.setFilms(response.data);
    })
    .catch(error => console.log(error))
  }

  setFilms = (response) => {
    this.setState({ todos: response,
                    large: this.largeTile(response),
                    small: this.smallTiles(response),
                    hasFilms: true })
  }

  smallTiles = (response) => {
    return response.filter((item) => !item.large);
  }

  largeTile = (response) => {
    const filteredByLarge = response.filter((item) => item.large);
    if (filteredByLarge.length > 0) {
      return filteredByLarge[0]
    } else {
      return response[0]
    }
  }

  createTodo = (title, url, large) => {
    axios.post('/api/v1/todos', {todo: {title: title, url: url, large: large}})
    .then(response => {
      const todos = update(this.state.todos, {
        $splice: [[0, 0, response.data]]
      })
      this.setState({ todos: todos, inputValue: "", title: "", url: "", large: null, adminMessage: "Hey" })
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
      this.setState({ todos: todos, adminMessage: UPDATE_MESSAGE })
    })
    .catch(error => console.log(error))
  }

  fadeMessage = (message) => {
    this.setState({ adminMessage: message });
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
    const { large, small, selectedVideo, hasFilms, adminMessage, todos } = this.state;

    return (
      <Router>
        <Switch>
          <Route path='/' exact render={(props) => (
            <HomePage
              largeTile={large}
              smallTiles={small}
              updateTodo={this.updateTodo}
              handleSelectedVideo={this.handleSelectedVideo}
              handleClearSelected={this.handleClearSelected}
              selectedVideo={selectedVideo}
              hasFilms={hasFilms}
            />
          )} />
          <Route path='/tommy-admin' exact render={(props) => (
              <Admin
                todos={todos}
                createTodo={this.createTodo}
                updateTodo={this.updateTodo}
                deleteTodo={this.deleteTodo}
                adminMessage={adminMessage}
              />
            )} />
        </Switch>
      </Router>
    );
  }
}

export default App;
