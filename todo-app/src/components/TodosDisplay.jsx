import React from 'react'

const TodosDisplay = ({ todos, updateTodo, deleteTodo, handleSelectedVideo }) =>
  <div className="listWrapper">
    <ul className="taskList">
      {todos.map((todo) => {
        return(
          <li className="task" key={todo.id}>
            <img className="admin-image" alt="" onClick={() => handleSelectedVideo(todo.url)} src={`http://img.youtube.com/vi/${todo.url}/0.jpg`} />
          </li>
        )
      })}
    </ul>
  </div>

export default TodosDisplay
