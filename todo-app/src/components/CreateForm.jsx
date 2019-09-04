import React from 'react'

class CreateForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: "",
      large: null
    }
  }

  handleChangeTitle = (e) => {
    this.setState({ title: e.target.value })
  }

  handleChangeUrl = (e) => {
    this.setState({ url: e.target.value })
  }

  handleChangeLarge = (e) => {
    this.setState({ large: e.target.checked })
  }

  render() {
    const { title, url, createTodo } = this.props;

    return(
      <div className="formContainer">
        <img className="admin-image-update" alt="" src={`http://img.youtube.com/vi/${url}/0.jpg`} />
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
            <a href="https://docs.joeworkman.net/rapidweaver/stacks/youtube/video-id" target="_blank" rel="noopener noreferrer" >WTF is this?</a>
          </label>
          <input
            className="taskInput"
            type="text"
            placeholder="Url"
            maxLength="50"
            value={url}
            onChange={(e) => this.handleChangeUrl(e)}
          />
          <div className="formInner">
            <div>
              <label class="container">Featured tile
                <input type="checkbox" onChange={(e) => this.handleChangeLarge(e)} checked={this.state.large} />
                <span class="checkmark"></span>
              </label>
            </div>
            <button className="button" onClick={() => createTodo(this.state.title, this.state.url, this.state.large)}>Add</button>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateForm
