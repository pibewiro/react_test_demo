import React from "react";
import { shallow } from "enzyme";
import Headline from "./index.js";
import checkPropTypes from "check-prop-types";

describe("headline tests", () => {
  it("Should not throw a warning", () => {
    const expectedProps = {
      title: "test",
      headline: "test",
      cars: [
        {
          make: "Ford",
          model: "Explorer",
          year: "2015",
          price: 1500,
          sold: true,
        },
      ],
    };

    const propsArr = checkPropTypes(
      Headline.propTypes,
      expectedProps,
      "props",
      Headline.name
    );

    expect(propsArr).toBeUndefined();
  });
});
