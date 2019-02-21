import React from 'react';

class ItemEntries extends React.Component {
  createList(item) {
    return(
      <li className="liItem" key={item.key} catName={item.catName}>
        {item.name}
        <button>x</button>
      </li>
    )
  }

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
