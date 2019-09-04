import React from 'react'
import UpdateForm from './UpdateForm'
import CreateForm from './CreateForm'
import MessageModal from './MessageModal'

const Admin = ({ todos, createTodo, updateTodo, deleteTodo, adminMessage, deletePrompt, handleDeleteFilm, handleConfirmDelete, cancelDelete }) =>
  <div className="admin-wrapper">
    <h1>Admin</h1>
    <h2>Add a new video</h2>
    { adminMessage && <MessageModal message={adminMessage} /> }
    { deletePrompt &&
      <MessageModal
        message={deletePrompt}
        onSubmit={handleConfirmDelete}
        onCancel={cancelDelete}
        deleteType
      />
    }
    { todos.length > 0 &&
      <React.Fragment>
        <CreateForm createTodo={createTodo} />
        <h2>Update existing videos</h2>
        {todos.map((todo) => {
          return(
            <UpdateForm
              title={todo.title}
              url={todo.url}
              id={todo.id}
              large={todo.large}
              deletePrompt={deletePrompt}
              handleDeleteFilm={handleDeleteFilm}
              updateTodo={updateTodo}
            />)
        })}
      </React.Fragment>
    }
  </div>

export default Admin
