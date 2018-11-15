import React from "react";
import { shallow, mount, configure } from "enzyme";
import TodoItem from "./TodoItem";
import { itemsData } from "./itemsData";

describe("TodoItem", () => {
  const mockUpdate = jest.fn();

  let props = {
    item: {
      title: "test",
      isActive: false,
      isComplete: false,
      isSuccess: false,
      isDeleted: false,
      isDeleteInGrace: false
    },
    index: 0,
    update: mockUpdate
  };

  const app = shallow(<TodoItem {...props} />);
  props = {
    item: {
      title: "test",
      isActive: false,
      isComplete: false,
      isSuccess: true,
      isDeleted: false,
      isDeleteInGrace: false
    },
    index: 0,
    update: mockUpdate
  };
  const app2 = shallow(<TodoItem {...props} />);

  it("renders properly", () => {
    expect(app).toMatchSnapshot();
  });

  it("displays success button when isSuccess is false", () => {
    expect(app.find(".successButton").exists()).toEqual(true);
  });

  it("does not display success button when isSuccess is false", () => {
    expect(app2.find(".successButton").exists()).toEqual(false);
  });
});
