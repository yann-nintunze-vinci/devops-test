import { Main } from "../app.js";

describe("Math tests", () => {
  const result = Main();
  it("should add 1 + 1 to equal 2", () => {
    expect(1 + 1).toBe(2);
  });
});
