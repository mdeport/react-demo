import { generateKey } from "./helpers";
import { expect, test } from "vitest";

test("générer la clé", () => {
  expect(generateKey("test", 1)).toBe("test-1");
});
