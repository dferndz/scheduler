import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./";

jest.mock("firebase");

afterEach(cleanup);

describe("App", () => {
  it("renders without crashing", () => {
    const { container } = render(<App />);

    expect(container).toBeInTheDocument();
  });
});
