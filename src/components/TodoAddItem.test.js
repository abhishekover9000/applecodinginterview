import React from "react";
import { shallow, configure } from "enzyme";
import TodoAddItem from "./TodoAddItem";

describe("TodoAddItem", () => {
  const app = shallow(<TodoAddItem />);

  it("renders properly", () => {
    expect(app).toMatchSnapshot();
  });
});
