import React from "react";
import { shallow } from "enzyme";
import Button from "./index";
import checkProps from "check-prop-types";

describe("Shared button componet", () => {
  it("renders", () => {
    const props = {
      buttonText: "Example Text",
      emitEvent: () => {},
    };

    const component = shallow(<Button {...props} />);
    const data = component.find(`[data-test='button-component']`);
    expect(data.length).toBe(1);
  });

  it("Proptypes should not throw warning", () => {
    const expectedProps = {
      buttonText: "Example Text",
      emitEvent: () => {},
    };

    const propsError = checkProps(
      Button.propTypes,
      expectedProps,
      "props",
      Button.name
    );

    expect(propsError).toBeUndefined();
  });
  // let wrapper;
  // let mockFunc;
  // mockFunc = jest.fn();

  // beforeEach(() => {
  //   const props = {
  //     buttonText: "Example Button Text",
  //     emitEvent: mockFunc,
  //   };
  //   wrapper = shallow(<Button {...props} />);
  // });

  // it("shoudld emit callback on click", () => {
  //   const data = wrapper.find(`[data-test='button-component']`);
  //   data.simulate("click");
  //   console.log(mockFunc.mock);
  //   const callback2 = mockFunc.mock.calls.length;
  //   expect(callback2).toBe(1);
  // });
});
