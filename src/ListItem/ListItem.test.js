import React from "react";
import { shallow } from "enzyme";
import ListItem from "./index";
import checkProps from "check-prop-types";

describe("List Item Componet", () => {
  it("Should not throw a warning", () => {
    const expectedProps = {
      title: "Test Title",
      desc: "Test Desc",
    };

    const propsErr = checkProps(
      ListItem.propTypes,
      expectedProps,
      "props",
      ListItem.name
    );
    expect(propsErr).toBeUndefined();
  });

  it("should render a list item component", () => {
    const props = {
      title: "Test Title",
      desc: "Test desc",
    };

    const component = shallow(<ListItem {...props} />);
    const data = component.find(`[data-test='listItem-comp']`);
    expect(data.length).toBe(1);
  });

  it("should render a list title", () => {
    const props = {
      title: "Test Title",
      desc: "Test desc",
    };

    const component = shallow(<ListItem {...props} />);
    const data = component.find(`[data-test='title-comp']`);
    expect(data.length).toBe(1);
  });

  it("should render a list desc", () => {
    const props = {
      title: "Test Title",
      desc: "Test desc",
    };

    const component = shallow(<ListItem {...props} />);
    const data = component.find(`[data-test='desc-comp']`);
    expect(data.length).toBe(1);
  });
});
