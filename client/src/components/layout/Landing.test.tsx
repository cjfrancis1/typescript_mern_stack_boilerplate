import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Landing from "./Landing";
import { findByElement } from "../../helpers/findBy";

const setup = (props = {}) => {
  const wrapper = shallow(<Landing {...props} />);
  return wrapper;
};

describe("<Landing />", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("renders without component error", () => {
    const section = findByElement(wrapper, "section");
    expect(section.length).toBe(1);
  });
});
