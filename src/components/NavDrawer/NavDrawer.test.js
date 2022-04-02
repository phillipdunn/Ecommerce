import React from "react";
import { render } from "@testing-library/react";
import NavDrawer from "./NavDrawer";

describe("NavDrawer tests", () => {
  it("should render", () => {
    expect(render(<NavDrawer />)).toBeTruthy();
  });
});
