import test, { expect } from "@playwright/test";

test("ajouter un element", async ({ page }) => {
  await page.goto("http://localhost:4173");

  const btn = page.getByText("Ajouter");
  const result = page.getByTestId("resultSpan0");
  const input = page.getByPlaceholder("Ajouter un élément");

  await input.fill("element 1");
  await btn.click();

  await expect(result).toHaveCount(1);
  await expect(result).toHaveText("element 1");
});
