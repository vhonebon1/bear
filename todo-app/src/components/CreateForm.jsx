import React from 'react'

class CreateForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: ""
    }
  }

  handleChangeTitle = (e) => {
    this.setState({ title: e.target.value })
  }

  handleChangeUrl = (e) => {
    this.setState({ url: e.target.value })
  }

  render() {
    const { title, url, createTodo } = this.props;

    return(
      <React.Fragment>
        <h2>Add a new video</h2>
        <div className="inputContainer">
          <label>Video title</label>
          <input
            className="taskInput"
            type="text"
            placeholder="Title"
            maxLength="50"
            value={title}
            onChange={(e) => this.handleChangeTitle(e)}
          />
        <label>YouTube id</label>
          <input
            className="taskInput"
            type="text"
            placeholder="Url"
            maxLength="50"
            value={url}
            onChange={(e) => this.handleChangeUrl(e)}
          />
          <button onClick={() => createTodo(this.state.title, this.state.url)}>Add</button>
        </div>
      </React.Fragment>
    )
  }
}

export default CreateForm
