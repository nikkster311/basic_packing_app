import React from 'react';
import ItemEntries from "./itemEntries";
import AddItem from "./AddItem";

class CategoryComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentItem: {catKey: "", itemKey: "", name: ""},
      itemsList: []
    }


    this.handleInput.bind(this)
  }

  handleInput = (e) => {
    this.setState({
      currentItem: {catKey: this.props.key, itemKey: new Date(), name: e.target.value}
    })
    // const { name, value } = e.target;
    // var key = new Date();
    // this.setState({
    //   ["current" + name + "item"]: {value, key}
    // })
  }

  createCategoryList(props) {
    return(
      <ul className="ulCatComp" key={this.props.key}>
        <h2>{this.props.name}</h2>
        <ItemEntries />
        <h1>hi</h1>
        <AddItem
          handleInput={this.handleInput}/>

      </ul>
   )}

  //
  // render() {
  //   return(
  //     // const categories = {this.props.categories}
  //     <h1>CategoryComponent</h1>
  //     // <CategoryList name="toiletries"/>
  //     // <AddToList
  //     // name="toiletries"
  //     // currentItem={this.state.currentToiletriesItem}
  //     // handleInput={this.handleInput}
  //     // handleAdd={this.handleAdd} />
  //
  //
  //   )
  // }

  render() {
    return(
      <section>
        <h2>{this.props.name}</h2>
      </section>

    )
  }
}

export default CategoryComponent;
