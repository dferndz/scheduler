import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./";

describe("App", () => {
  it("renders without crashing", () => {
    const { container } = render(<App />);

    expect(container).toBeInTheDocument();
  });
});
