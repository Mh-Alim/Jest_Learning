import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Comp from "./Comp";
import { sayHi } from "./Utils";

test("click function testing", () => {
  render(<Comp />);
  const btn = screen.getAllByRole("button");
  fireEvent.click(btn[0]);
  expect(screen.getByText("final")).toBeInTheDocument();

  fireEvent.click(btn[1]);
  expect(screen.getByText("initial")).toBeInTheDocument();
});

test("sayHi function testing", () => {
  render(<Comp />);
  expect(sayHi()).toMatch("Hi");
});
