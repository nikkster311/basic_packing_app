import React from "react";

class AddItem extends React.Component {

  render() {
    return(
      <form className="addItemForm" onSubmit={this.handleAdd}>addItem
        <input
          type="text"
          placeholder="input here"
          value={this.props.currentItem.name}
          onChange={this.props.handleInput} />
        <button type="submit">Add</button>
      </form>
    )
  }
}

export default AddItem;
