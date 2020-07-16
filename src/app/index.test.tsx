import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import waitForExpect from "wait-for-expect";
import App from "./";

afterEach(cleanup);

const mock_fb_init = jest.fn();

jest.mock("firebase/app", () => {
  return {
    initializeApp: () => mock_fb_init(),
    analytics: jest.fn(),
  };
});

describe("App", () => {
  it("renders without crashing", () => {
    const { container } = render(<App />);

    expect(container).toBeInTheDocument();
  });
  it("initializes firebase", async () => {
    const { container } = render(<App />);

    expect(container).toBeInTheDocument();

    await waitForExpect(() => {
      expect(mock_fb_init).toHaveBeenCalled();
    });
  });
});
