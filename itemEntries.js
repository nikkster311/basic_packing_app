import React from 'react';

class ItemEntries extends React.Component {
  createList(item, props) {
    return(
      <li className="liItem" key={item.key} catname={item.catname}>
        {item.name}
        <button onClick={props.handleDelete}>x</button>
      </li>
    )
  }
  //if you delete this.props.handleDelete, everything works.

  render(props) {
    const itemsList = this.props.itemsList
    const mappedItems = itemsList.map(this.createList)
    return(
      <li>
        <ul className="mappedItems">{mappedItems}</ul>
      </li>

    )
  }
}

export default ItemEntries;
