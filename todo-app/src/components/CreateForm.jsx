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
      <div className="create-form">
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
          <label className="formContainer__label">YouTube id
            <span> </span>
            <a href="https://docs.joeworkman.net/rapidweaver/stacks/youtube/video-id" target="_blank">WTF is this?</a>
          </label>
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
      </div>
    )
  }
}

export default CreateForm
