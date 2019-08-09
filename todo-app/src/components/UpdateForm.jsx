import React from 'react'

class UpdateForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      url: this.props.url
    }
  }

  handleChangeTitle = (e) => {
    this.setState({ title: e.target.value })
  }

  handleChangeUrl = (e) => {
    this.setState({ url: e.target.value })
  }

  render() {
    const { updateTodo, id, deleteTodo, url } = this.props;

    return(
      <React.Fragment>
        <div className="formContainer">
          <img className="admin-image" alt="" src={`http://img.youtube.com/vi/${url}/0.jpg`} />
          <div className="inputContainer">
            <label>Video title</label>
            <input
              className="taskInput"
              type="text"
              placeholder="Title"
              maxLength="50"
              value={this.state.title}
              onChange={(e) => this.handleChangeTitle(e)}
            />
            <label>YouTube id</label>
            <input
              className="taskInput"
              type="text"
              placeholder="Url"
              maxLength="50"
              value={this.state.url}
              onChange={(e) => this.handleChangeUrl(e)}
            />
            <button className="deleteTaskBtn" onClick={(e) => deleteTodo(id)}>Delete</button>
            <button onClick={() => updateTodo(this.state.title, this.state.url, id)}>Update</button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default UpdateForm
