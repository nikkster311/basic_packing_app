import React from 'react';

class ItemEntries extends React.Component {
  createList(item) {
    return(
      <li className="liItem" key={item.key}>
        {item.name}
        <button onChange={this.props.deleteItem}>x</button>
      </li>
    )
  }

  render() {

    return(
      <h1>hi</h1>
      // const
      // <ul>{mappedCategoryItemsList}</ul>

    )
  }
}

export default ItemEntries;
