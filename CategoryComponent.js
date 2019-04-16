import React from 'react';
import ItemEntries from "./itemEntries";
import AddItem from "./AddItem";

class CategoryComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentItem: {key: "", name: ""},
      itemsList: []
    }
    this.handleInput.bind(this);
    this.handleAdd.bind(this);
    this.deleteItem.bind(this);
    // this.handleDelete.bind(this);
  }

//OHMYGOD This was deleteItem(key) {} and was causing it to refresh the app -_-
  deleteItem = key => {
    const newList = this.state.itemsList
    const filteredList = newList.filter(item => item.key !== key)
    this.setState({itemsList: filteredList})
  }

  handleAdd = e => {
    e.preventDefault();
    const newItem = this.state.currentItem
    if (newItem.name !== '') {
      const itemsList = [...this.state.itemsList, newItem]
      this.setState({
        itemsList: itemsList,
        currentItem: {key: "", name: ""}
      })
    }
  }

  handleInput = e => {
    this.setState({
      currentItem: {key: Date.now(), name: e.target.value}
    }, () => {
      console.log("currentItem: key: " + this.state.currentItem.key + " , name: " + this.state.currentItem.name)
    })
  }


  render(props) {
    return(
      <section>
        <ul className="ulCatComp" name={this.props.name}>
          <h2 className="catTitle">{this.props.name}</h2>
          <ItemEntries
            itemsList={this.state.itemsList}
            deleteItem={this.deleteItem} />
          <AddItem
            handleInput={this.handleInput}
            currentItem={this.state.currentItem}
            handleAdd={this.handleAdd} />
        </ul>
      </section>

    )
  }
}

export default CategoryComponent;
