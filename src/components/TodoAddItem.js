import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class TodoAddItem extends Component {
  state = {
    name: ""
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  add = () => {
    this.props.addItem(this.state.name);
  };
  render() {
    return (
      <div>
        <TextField
          value={this.state.name}
          label="Title"
          onChange={this.handleChange}
        />
        <Button onClick={this.add} variant="extendedFab" color="primary">
          {" "}
          Add{" "}
        </Button>
      </div>
    );
  }
}
export default TodoAddItem;
