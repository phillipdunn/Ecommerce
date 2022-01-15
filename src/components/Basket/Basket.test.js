import React from "react";
import { render } from "@testing-library/react";
import Basket from "./Basket";

describe("Basket tests", () => {
  it("should render", () => {
    expect(render(<Basket />)).toBeTruthy();
  });
});
