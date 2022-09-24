import React from "react";
import { render } from "@testing-library/react";
import CartDropdown from "./CartDropdown";

describe("CartDropdown tests", () => {
  it("should render", () => {
    expect(render(<CartDropdown />)).toBeTruthy();
  });
});
