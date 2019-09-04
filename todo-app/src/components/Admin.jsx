import React from 'react'
import UpdateForm from './UpdateForm'
import CreateForm from './CreateForm'
import MessageModal from './MessageModal'

const Admin = ({ adminMessage, deletePrompt, handleConfirmDelete, cancelDelete, toggleCreate, todos, createForm, createTodo, handleDeleteFilm, updateTodo }) =>
  <div className="admin-wrapper">
    <div className="admin-header">
      <h1>Admin</h1>
      <button className="button create" onClick={() => toggleCreate()}>Add new film</button>
    </div>
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
        { createForm &&
          <React.Fragment>
            <h2>Add a new video</h2>
            <CreateForm createTodo={createTodo} />
          </React.Fragment>
        }
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
