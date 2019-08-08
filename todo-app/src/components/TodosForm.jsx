import React from 'react'
import axios from 'axios'

const TodosForm = ({ title, url, handleChangeTitle, handleChangeUrl, createTodo }) =>
  <div className="inputContainer">
    <input className="taskInput" type="text"
      placeholder="Title" maxLength="50"
      value={title} onChange={handleChangeTitle}
    />
    <input className="taskInput" type="text"
      placeholder="Url" maxLength="50"
      value={url} onChange={handleChangeUrl}
    />
    <button onClick={createTodo}>Add</button>
  </div>

export default TodosForm;
