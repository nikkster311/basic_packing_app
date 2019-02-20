import React from "react";

class AddItem extends React.Component {

  render() {
    return(
      <form className="addItemForm" onSubmit={this.handleAdd}>
        <input
          type="text"
          placeholder="input here"
          name={this.props.name}
          value={this.props.currentItem.text}
          onChange={this.props.handleInput} />
          <button type="submit">Add</button>
      </form>
    )
  }
}

export default AddItem;
