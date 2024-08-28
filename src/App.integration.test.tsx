import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("Ajout d'un élément", async () => {
  const testElement = "element 1";
  render(<App />);
  const user = userEvent.setup();
  const input = screen.getByPlaceholderText("Ajouter un élément");
  const list = screen.getByTestId("list");
  const button = screen.getByText("Ajouter");
  user.type(input, testElement);
  user.click(button);
  
  expect(list.children.length).toBe(1);
  expect(list.children[0].textContent).toBe(testElement);
});
