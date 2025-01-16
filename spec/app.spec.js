const Main = require("../app.js");

describe("Math tests", () => {
  const main = new Main();

  it("should return JJ00 when minute is 22", () => {
    const result = main.getMinutesSimples(22);

    expect(result).toBe("JJOO");
  });

  it("should return JJJJ when minute is 54", () => {
    const result = main.getMinutesSimples(54);

    expect(result).toBe("JJJJ");
  });
});
