import React from "react";
import { shallow } from "enzyme";
import { testStore } from "./testStore";
import App from "./App";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};
describe("App Component", () => {
  let component;
  beforeEach(() => {
    const initialState = {
      posts: [
        { title: "title 1", body: "bod1" },
        { title: "title 1", body: "bod1" },
        { title: "title 1", body: "bod1" },
      ],
    };
    component = setUp(initialState);
  });

  it("should render without errors", () => {
    const data = component.find(`[data-test='App-comp']`);
    expect(data.length).toBe(1);
  });

  it("should update the button", () => {
    const classInstatence = component.instance();
    classInstatence.updateBtn();
    const ns = classInstatence.state.hideBtn;
    expect(ns).toBe(true);
  });

  it("return value", () => {
    const classInstatence = component.instance();
    const nv = classInstatence.returnValue(9);
    expect(nv).toBe(10);
  });
});
