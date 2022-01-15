import React from "react";
import { render } from "@testing-library/react";
import Shop from "./Shop";

describe("Shop tests", () => {
  it("should render", () => {
    expect(render(<Shop />)).toBeTruthy();
  });
});
