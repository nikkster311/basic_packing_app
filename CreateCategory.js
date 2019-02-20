import React from "react";

class CreateCategory extends React.Component {


  render() {
    return (
      <div>
        <form className="createCatForm" onSubmit={this.props.onSubmit}>createCategory forms
          <input
            type="text"
            placeholder="create new category"
            onChange={this.props.handleInput}
            value={this.props.currentCategory.name} />
          <button type="submit"> Create Category </button>
        </form>
      </div>
    )
  }
}

export default CreateCategory;
