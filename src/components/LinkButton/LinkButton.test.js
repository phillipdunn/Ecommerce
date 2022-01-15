import React from "react";
import { render } from "@testing-library/react";
import LinkButton from "./LinkButton";

describe("LinkButton tests", () => {
  it("should render", () => {
    expect(render(<LinkButton />)).toBeTruthy();
  });
});
