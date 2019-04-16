import React from 'react';

class ItemEntries extends React.Component {
  constructor(props) {
    super(props)

    this.createList.bind(this);
  }



  createList(item) {
    console.log("running createList... key : " + item.key + " and name: " + item.name)  
    return(
      <li className="liItem" key={item.key}>
        {item.name}
        <button onClick={() => { this.props.deleteItem(item.key) }}>x</button>
      </li>
    )
  }
  //if you delete this.props.handleDelete, everything works.


  render(props) {
    const itemsList = this.props.itemsList
    const mappedItems = itemsList.map(item => this.createList(item))
    return(
      <li>
        <ul className="mappedItems">{mappedItems}</ul>
      </li>

    )
  }
}

export default ItemEntries;
