import React from 'react'
import UpdateForm from './UpdateForm'
import CreateForm from './CreateForm'
import MessageModal from './MessageModal'

class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      createForm: false
    }
  }

  toggleCreate = () => {
    this.setState({ createForm: !this.state.createForm })
  }

  renderCreateForm = () => {
    return(
      <React.Fragment>
        <h2>Add a new video</h2>
        <CreateForm createTodo={this.props.createTodo} />
      </React.Fragment>
    )
  }

  renderDeleteModal = () => {
    return(
      <MessageModal
        message={this.props.deletePrompt}
        onSubmit={this.props.handleConfirmDelete}
        onCancel={this.props.cancelDelete}
        deleteType
      />
    )
  }

  renderUpdateForms = () => {
    return(
      <React.Fragment>
        <h2>Update existing videos</h2>
        {this.props.todos.map((todo) => {
          return(
            <UpdateForm
              title={todo.title}
              url={todo.url}
              id={todo.id}
              large={todo.large}
              deletePrompt={this.props.deletePrompt}
              handleDeleteFilm={this.props.handleDeleteFilm}
              updateTodo={this.props.updateTodo}
            />)
          })}
      </React.Fragment>
    )
  }

  render() {
    const { adminMessage, deletePrompt, todos, createTodo } = this.props;
    return (
      <div className="admin-wrapper">
        <div className="admin-header">
          <h1>Admin</h1>
          <button className="button create" onClick={this.toggleCreate}>Add new film</button>
        </div>
        { adminMessage && <MessageModal message={this.props.adminMessage} /> }
        { deletePrompt && this.renderDeleteModal() }
        { todos.length > 0 &&
          <React.Fragment>
            { this.state.createForm && this.renderCreateForm() }
            { this.renderUpdateForms() }
            </React.Fragment>
          }
        </div>
    )
  }
}

export default Admin
