import React, { Component } from "react";
import TodoAddItem from "./TodoAddItem";
import TodoItem from "./TodoItem";

class TodoContainer extends Component {
  state = {
    items: [],
    isUserAddingNewItem: false
  };
  render() {
    return <div>TodoContainer</div>;
  }
}
export default TodoContainer;
