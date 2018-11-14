import React, { Component } from "react";
import TodoAddItem from "./TodoAddItem";
import TodoItem from "./TodoItem";

class TodoContainer extends Component {
  state = {
    items: [],
    isUserAddingNewItem: false
  };

  toggleUserAdd = () => {
    this.setState({ isUserAddingNewItem: true });
  };

  render() {
    const { items, isUserAddingNewItem } = this.state;

    const itemsList = items.forEach(item => {
      return <TodoItem />;
    });
    return (
      <div>
        {items.length > 0 ? { itemsList } : <div> "Nothing to do yet.." </div>}
        {isUserAddingNewItem ? (
          <TodoAddItem />
        ) : (
          <button className="addUserButton" onClick={this.toggleUserAdd}>
            {" "}
            Add Item{" "}
          </button>
        )}
      </div>
    );
  }
}
export default TodoContainer;
