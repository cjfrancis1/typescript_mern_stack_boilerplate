import React from "react";
import { ShallowWrapper } from "enzyme";
import { createShallow } from "@material-ui/core/test-utils";

import Navbar from "./Navbar";
import { findByElement } from "../../../helpers/findBy";

let shallow;
const setup = (props = {}) => {
  const wrapper = shallow(<Navbar {...props} />);
  return wrapper;
};

describe("<Navbar />", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    shallow = createShallow({ untilSelector: "nav" });
    wrapper = setup();
  });
  test("renders without component error", () => {
    const Nav = findByElement(wrapper, "nav");
    expect(Nav.length).toBe(1);
  });
});
