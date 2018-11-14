import React from "react";
import { shallow, configure } from "enzyme";
import TodoContainer from "./TodoContainer";

describe("TodoContainer", () => {
  const app = shallow(<TodoContainer />);

  it("renders properly", () => {
    expect(app).toMatchSnapshot();
  });
});
