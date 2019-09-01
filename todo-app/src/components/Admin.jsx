import React from 'react'
import UpdateForm from './UpdateForm'
import CreateForm from './CreateForm'

const Admin = ({ todos, createTodo, updateTodo, deleteTodo }) =>
  <div className="admin-wrapper">
    <h1>Admin</h1>
    <h2>Add a new video</h2>
    { todos.length > 0 &&
      <React.Fragment>
        <CreateForm
          createTodo={createTodo}
        />
        <h2>Update existing videos</h2>
        {todos.map((todo) => {
          return(
            <React.Fragment>
              <UpdateForm
                title={todo.title}
                url={todo.url}
                id={todo.id}
                large={todo.large}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            </React.Fragment>)
          })}
      </React.Fragment>
    }
  </div>

export default Admin
