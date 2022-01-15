import React from "react";
import { render } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact tests", () => {
  it("should render", () => {
    expect(render(<Contact />)).toBeTruthy();
  });
});
