import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Footer from "./Footer";
import { findByElement } from "../../helpers/findBy";

const setup = (props = {}) => {
  const wrapper = shallow(<Footer {...props} />);
  return wrapper;
};

describe("<Footer />", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("renders without component error", () => {
    const footer = findByElement(wrapper, "footer");
    expect(footer.length).toBe(1);
  });
});
