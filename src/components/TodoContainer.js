import React, { Component } from "react";
import TodoAddItem from "./TodoAddItem";
import TodoItem from "./TodoItem";
import * as constants from "./TodoConst";
import Button from "@material-ui/core/Button";

class TodoContainer extends Component {
  state = {
    items: [],
    isUserAddingNewItem: false,
    timeOut: null
  };

  toggleUserAdd = () => {
    this.setState({ isUserAddingNewItem: true });
  };

  addNewItem = itemName => {
    const items = this.state.items;
    items.push({
      title: itemName,
      isActive: false,
      isComplete: false,
      isSuccess: false,
      isDeleted: false,
      isDeleteInGrace: false
    });
    this.setState({ items, isUserAddingNewItem: false });
  };

  updateItem = (itemIndex, action) => {
    const item = this.state.items[itemIndex];
    switch (action) {
      case constants.ACTIVATE:
        item.isActive = true;
        break;
      case constants.DEACTIVATE:
        item.isActive = false;
        break;
      case constants.COMPLETE:
        item.isComplete = true;
        item.isActive = false;
        break;
      case constants.INCOMPLETE:
        item.isComplete = false;
        break;
      case constants.SUCCESS:
        item.isSuccess = true;
        item.isActive = false;
        break;
      case constants.NOT_SUCCESS:
        item.isSuccess = false;
        break;
      case constants.DELETE:
        item.isDeleted = true;
        item.isActive = false;
        break;
      case constants.UNDO:
        item.isDeleted = false;
        item.isDeleteInGrace = false;
        break;
      case constants.DELETE_GRACE:
        item.isDeleteInGrace = true;
        break;
    }

    this.setState({
      items: this.state.items
    });
  };

  render() {
    const { items, isUserAddingNewItem } = this.state;

    const itemsList = items.map((item, i) => {
      if (!item.isDeleted) {
        return (
          <TodoItem key={i} item={item} index={i} update={this.updateItem} />
        );
      }
    });
    return (
      <div>
        <div className="itemList">
          {items.length > 0 ? (
            <React.Fragment> {itemsList} </React.Fragment>
          ) : (
            <div> "Nothing to do yet.." </div>
          )}
        </div>
        {isUserAddingNewItem ? (
          <TodoAddItem addItem={this.addNewItem} />
        ) : (
          <Button
            className="addUserButton"
            color="primary"
            variant="contained"
            onClick={this.toggleUserAdd}
          >
            {" "}
            Add Item{" "}
          </Button>
        )}
      </div>
    );
  }
}
export default TodoContainer;
