import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("Ajout d'un élément", async () => {
  render(<App />);
  const testElement = "element 1";
  const user = userEvent.setup();
  const list = screen.getByTestId("list");
  const button = screen.getByText("Ajouter");
  const input = screen.getByPlaceholderText("Ajouter un élément");

  await user.type(input, testElement);
  await user.click(button);

  expect(list.children.length).toBe(1);
  const result = screen.getByTestId("resultSpan0");

  expect(result.textContent).toBe(testElement);
});
