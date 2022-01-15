import React from "react";
import { render } from "@testing-library/react";
import Signin from "./Signin";

describe("Signin tests", () => {
  it("should render", () => {
    expect(render(<Signin />)).toBeTruthy();
  });
});
