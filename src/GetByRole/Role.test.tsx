import React from "react";
import { render, screen, within } from "@testing-library/react";
import Role from "./Role";

test("getByRole btn testcases", () => {
  render(<Role />);
  const btn1 = screen.getByRole("button", { name: "click1" });
  expect(btn1).toBeInTheDocument();

  const btn2 = screen.getByRole("button", { name: "click2" });
  expect(btn2).toBeInTheDocument();
});

test("getByRole input testcases", () => {
  render(<Role />);
  const textbox1 = screen.getByRole("textbox", { name: "label1" });
  expect(textbox1).toBeInTheDocument();

  const textbox2 = screen.getByRole("textbox", { name: "label2" });
  expect(textbox2).toBeInTheDocument();
});

test("getByRole div testcase", () => {
  render(<Role />);
  const dv1 = screen.getByRole("div1");
  expect(dv1).toBeInTheDocument();

  const childp = within(dv1).getByText("child p2");
  expect(childp).toBeInTheDocument();
});
