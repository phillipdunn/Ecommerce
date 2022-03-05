import React from "react";
import { render } from "@testing-library/react";
import MenuItem from "./MenuItem";

describe("MenuItem tests", () => {
  it("should render", () => {
    expect(render(<MenuItem />)).toBeTruthy();
  });
});
