import React from "react";
import { render } from "@testing-library/react";
import SubmitButton from "./SubmitButton";

describe("SubmitButton tests", () => {
  it("should render", () => {
    expect(render(<SubmitButton />)).toBeTruthy();
  });
});
