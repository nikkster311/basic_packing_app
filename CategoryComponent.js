import React from 'react';
import ItemEntries from "./itemEntries";
import AddItem from "./AddItem";

class CategoryComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentItem: {key: "", name: ""},
      itemsList: [],
      completedItems: [],
      strike: false,
    }
    this.handleInput.bind(this);
    this.handleAdd.bind(this);
    this.deleteItem.bind(this);
    this.strikeToggle.bind(this);
    this.addCompleted.bind(this);
    // this.handleDelete.bind(this);
  }

//OHMYGOD This was deleteItem(key) {} and was causing it to refresh the app -_-
  deleteItem = key => {
    const newList = this.state.itemsList
    const filteredList = newList.filter(item => item.key !== key)
    this.setState({itemsList: filteredList})
  }


  strikeToggle = (key) => {
    console.log("running strikeToggle..")
    const newList = this.state.itemsList
    const completedList = this.state.completedItems
    console.log("newList: " + newList + ", completedList: " + completedList + ", key: " + key)

    //STOPS WORKING HERE
    for (var x in completedList) { //if item already in completed list, take off list
      console.log("checking x in completedlist: " + x)
      if (x.key === key) {
        console.log("key already in completedList..removing from list")
        completedList.filter(item => item.key !== key)
        this.setState({completedItems: completedList}, () => {
          console.log("completedItems are " + this.state.completedItems)
        })
      }
      else { //else add to completedList
        console.log("item not in completedList, adding to completedList..")
        this.setState({currentItem: {key: x.key, name: x.name}}, () => {
          this.addCompleted()})
      }}}




    addCompleted = () => {
      console.log("running addCompleted. completedItems are " + this.state.completedItems + ", currentItem is " + this.state.currentItem)
      const completedList = [...this.state.completedItems, this.state.currentItem]
      this.setState({
        completedList: completedList,
        currentItem: {key: "", name: ""}
      }, () => {
        console.log(this.state.completedList + "currentItem: " + this.state.currentItem)
      })
    }






  // strikeItem = key => {
  //   const newList = this.state.itemsList
  //   const strikedItem = newList.filter(item => item.key === key)
  //
  // }

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
            deleteItem={this.deleteItem}
            strikeToggle={this.strikeToggle}
            completed={this.state.strike}/>
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
