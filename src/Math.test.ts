import { expect, test } from "bun:test";
import { add } from "./Math";

test("adding 2 numbers returns their sum", () => {
  expect(add(1, 2)).toBe(3);
});
