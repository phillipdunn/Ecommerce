import React from "react";
import { render } from "@testing-library/react";
import SignUp from "./SignUp";

describe("SignUp tests", () => {
  it("should render", () => {
    expect(render(<SignUp />)).toBeTruthy();
  });
});
