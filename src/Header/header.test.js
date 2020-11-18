import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

describe("Header Component", () => {
  it("header should contain a navbar-component", () => {
    const component = shallow(<Header />);
    const wrapper = component.find(`[data-test='navbar-component']`);
    expect(wrapper.length).toBe(1);
  });

  it("header should contain nav-items", () => {
    const component = shallow(<Header />);
    const wrapper = component.find(`[data-test='nav-items']`);
    expect(wrapper.length).toBe(1);
  });

  it("header should contain logo", () => {
    const component = shallow(<Header />);
    const wrapper = component.find(`[data-test='logo']`);
    expect(wrapper.length).toBe(1);
  });
});
