import React from "react";
import { shallow, configure } from "enzyme";
import TodoContainer from "./TodoContainer";
import { itemsData } from "./itemsData";

describe("TodoContainer", () => {
  const app = shallow(<TodoContainer />);

  it("renders properly", () => {
    expect(app).toMatchSnapshot();
  });

  it("does not display an item when item list is empty", () => {
    expect(app.find(".item").exists()).toEqual(false);
  });

  app.setState({ items: itemsData });
  it("does displays items when item list is not empty", () => {
    // set time out gives app time to update state
    setTimeout(() => {
      expect(app.find(".item").exists()).toEqual(true);
    }, 1000);
  });

  it("ToggleUserAdd changes state", () => {
    app.find(".addUserButton").simulate("click");
    expect(app.state("isUserAddingNewItem")).toEqual(true);
  });
});
