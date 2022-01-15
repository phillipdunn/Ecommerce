import React from "react";
import { render } from "@testing-library/react";
import MenuComponent from "./MenuComponent";

describe("MenuComponent tests", () => {
  it("should render", () => {
    expect(render(<MenuComponent />)).toBeTruthy();
  });
});
