import React from 'react';
import ItemEntries from "./itemEntries";
import AddItem from "./AddItem";

class CategoryComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentItem: {catName: "", key: "", name: ""},
      itemsList: []
    }
    this.handleInput.bind(this);
    this.handleAdd.bind(this);
    // this.deletItem.bind(this);
  }
  handleAdd = e => {
    e.stopImmediatePropogation();
    const newItem = this.state.currentItem
    if (newItem.name !== '') {
      const itemsList = [...this.state.itemsList, newItem]
      this.setState({
        itemsList: itemsList,
        currentItem: {catName: "", key: "", name: ""}
      })
    }
  }

  handleInput = e => {
    this.setState({
      currentItem: {catName: this.props.name, key: Date.now(), name: e.target.value}
    }, () => {
      console.log("currentItem: catName: " + this.state.currentItem.catName + ", key: " + this.state.currentItem.key + " , name: " + this.state.currentItem.name)
    })
  }



  // deleteItem = (e) => {
  //
  // }

  render(props) {
    return(
      <section>
        <ul className="ulCatComp" name={this.props.name}>
          <h2>{this.props.name}</h2>
          <ItemEntries
            itemsList={this.state.itemsList}
            // deleteItem={this.deleteItem}
            />
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
