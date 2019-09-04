import React from 'react'

class UpdateForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      url: this.props.url,
      large: this.props.large
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

  hasChanges = () => {
    return this.state.title !== this.props.title ||
    this.state.url !== this.props.url ||
    this.state.large !== this.props.large
  }

  render() {
    const { updateTodo, id, url, handleDeleteFilm } = this.props;

    return(
      <React.Fragment>
        <div className="formContainer">
          <img className="admin-image-update" alt="" src={`http://img.youtube.com/vi/${url}/0.jpg`} />
          <div className="inputContainer">
            <label className="formContainer__label">Video title</label>
            <input
              className="taskInput"
              type="text"
              placeholder="Title"
              maxLength="50"
              value={this.state.title}
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
              value={this.state.url}
              onChange={(e) => this.handleChangeUrl(e)}
            />
            <div className="formInner">
              <div>
                <input
                  className="large-checkbox"
                  type="checkbox"
                  onChange={(e) => this.handleChangeLarge(e)}
                  checked={this.state.large}
                  />
                <label >Featured tile</label>
              </div>
              <div className="formInner-wrapper">
                <button className="button" disabled={!this.hasChanges()} onClick={() => updateTodo(this.state.title, this.state.url, id, this.state.large)}>Update</button>
                <button className="button danger" onClick={(e) => handleDeleteFilm(id)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default UpdateForm
