import { ShallowWrapper } from "enzyme";

export const findByTestAtter = (wrapper: ShallowWrapper, val: string) => {
  // Use string interpolation to pass in the data-test value
  return wrapper.find(`[data-test="${val}"]`);
};

export const findByElement = (wrapper: ShallowWrapper, el: string) => {
  // Use string interpolation to pass in the data-test value
  return wrapper.find(el);
};
