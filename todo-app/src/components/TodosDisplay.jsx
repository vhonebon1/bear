import React, { Component } from 'react'

const TodosDisplay = ({ todos, updateTodo, deleteTodo }) =>
  <div className="listWrapper">
    <ul className="taskList">
      {todos.map((todo) => {
        return(
          <li className="task" key={todo.id}>
            <div className="taskLabel">{todo.title}</div>
            <img className="admin-image" alt="" src={`http://img.youtube.com/vi/${todo.url}/0.jpg`} />
            <span className="deleteTaskBtn" onClick={(e) => deleteTodo(todo.id)}>x</span>
          </li>
        )
      })}
    </ul>
  </div>



export default TodosDisplay
