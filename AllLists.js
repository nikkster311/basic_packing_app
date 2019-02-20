import React from 'react';
import CategoryComponent from "./CategoryComponent";

class AllLists extends React.Component {
//we take all of the categories and create a category component for each

//maybe just have  <AddItem/> this underneath instead of nested



  createCategory(category) {
    return (
      <section className="categorySection" key={category.key}>
        <CategoryComponent
          name={category.name}
          key={category.key} />
      </section>
    )
  }



  render(props) {
    const catList = this.props.catList //sets list of all categories and keys to allCategories
    const mappedCategories = catList.map(this.createCategory)
    return( //for x in this.state.catList, map into a category component
      <section className="allCategories">{mappedCategories}</section>

    )
  }
//return a function that adds a new <CategoryComponent/> each time submit is hit on <CreateCategory/>
}

export default AllLists;
