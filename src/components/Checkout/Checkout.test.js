import React from "react";
import { render } from "@testing-library/react";
import Checkout from "./Checkout";

describe("Checkout tests", () => {
  it("should render", () => {
    expect(render(<Checkout />)).toBeTruthy();
  });
});
