import React from 'react';
import ItemEntries from "./itemEntries";
import AddItem from "./AddItem";

class CategoryComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentItem: {catname: "", key: "", name: ""},
      itemsList: []
    }
    this.handleInput.bind(this);
    this.handleAdd.bind(this);
    this.handleDelete.bind(this);
  }

  handleDelete =  key  => {
    console.log(this.state.itemsList + " = itemList***********")
    const newList = this.state.itemsList.filter(item => {
      return item.key !== key
    })
    console.log("newList : " + newList)
    this.setState({itemsList: newList})
  }

  handleAdd = e => {
    e.preventDefault();
    const newItem = this.state.currentItem
    if (newItem.name !== '') {
      const itemsList = [...this.state.itemsList, newItem]
      this.setState({
        itemsList: itemsList,
        currentItem: {catname: "", key: "", name: ""}
      })
    }
  }

  handleInput = e => {
    this.setState({
      currentItem: {catname: this.props.name, key: Date.now(), name: e.target.value}
    }, () => {
      console.log("currentItem: catname: " + this.state.currentItem.catname + ", key: " + this.state.currentItem.key + " , name: " + this.state.currentItem.name)
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
            handleDelete={this.handleDelete}
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
