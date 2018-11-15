import React, { Component } from "react";
import * as constants from "./TodoConst";
import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";

class TodoItem extends Component {
  updateItem = action => {
    this.props.update(this.props.index, action);
  };
  render() {
    const { item } = this.props;

    if (item.isDeleteInGrace)
      setTimeout(
        function() {
          this.updateItem(constants.DELETE);
        }.bind(this),
        3000
      );

    return (
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        className="item"
      >
        <Grid item>
          {item.isActive ? (
            <b> {item.title} </b>
          ) : (
            <React.Fragment> {item.title} </React.Fragment>
          )}
        </Grid>

        <Grid item>
          {item.isSuccess ? (
            <Button
              variant="text"
              color="secondary"
              onClick={this.updateItem.bind(this, constants.NOT_SUCCESS)}
            >
              {" "}
              Unsuccesfull{" "}
            </Button>
          ) : (
            <Button
              variant="text"
              color="primary"
              onClick={this.updateItem.bind(this, constants.SUCCESS)}
            >
              Successful{" "}
            </Button>
          )}
        </Grid>
        <Grid item>
          {item.isComplete ? (
            <Button
              variant="text outlined"
              color="secondary"
              onClick={this.updateItem.bind(this, constants.INCOMPLETE)}
            >
              {" "}
              Incomplete{" "}
            </Button>
          ) : (
            <Button
              variant="text"
              color="primary"
              onClick={this.updateItem.bind(this, constants.COMPLETE)}
            >
              Complete{" "}
            </Button>
          )}
        </Grid>
        {!item.isComplete && (
          <Grid item>
            {item.isActive ? (
              <Button
                variant="text"
                color="secondary"
                onClick={this.updateItem.bind(this, constants.DEACTIVATE)}
              >
                {" "}
                Deactivate{" "}
              </Button>
            ) : (
              <Button
                variant="text"
                color="primary"
                onClick={this.updateItem.bind(this, constants.ACTIVATE)}
              >
                Activate{" "}
              </Button>
            )}
          </Grid>
        )}
        <Grid item>
          {item.isDeleteInGrace ? (
            <React.Fragment>
              {" "}
              <i>Are you sure? </i>
              <Button
                variant="text"
                color="primary"
                onClick={this.updateItem.bind(this, constants.UNDO)}
              >
                Undo
              </Button>
              <Button
                variant="text"
                color="secondary"
                onClick={this.updateItem.bind(this, constants.DELETE)}
              >
                Delete
              </Button>
            </React.Fragment>
          ) : (
            <Button
              variant="text"
              color="primary"
              onClick={this.updateItem.bind(this, constants.DELETE_GRACE)}
            >
              Delete
            </Button>
          )}
        </Grid>
      </Grid>
    );
  }
}
export default TodoItem;
