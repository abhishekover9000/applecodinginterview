import React from "react";
import { shallow, configure } from "enzyme";
import TodoItem from "./TodoItem";

describe("TodoItem", () => {
  const app = shallow(<TodoItem />);

  it("renders properly", () => {
    expect(app).toMatchSnapshot();
  });
});
