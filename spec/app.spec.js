const Main = require("../app.js");

describe("Berlin Clock", () => {
  const main = new Main();

  it("should return JJOO when minute is 22", () => {
    const result = main.getMinutesSimples(22);

    expect(result).toBe("JJOO");
  });

  it("should return JJJO when minute is 33", () => {
    const result = main.getMinutesSimples(33);

    expect(result).toBe("JJJO");
  });

  it("should return JJJJ when minute is 54", () => {
    const result = main.getMinutesSimples(54);

    expect(result).toBe("JJJJ");
  });

  it("should return JJJJOOOOOOO when minute is 22", () => {
    const result = main.get5Minutes(22);

    expect(result).toBe("JJJJOOOOOOO");
  });

  it("should return RRRR when hour is 24", () => {
    const result = main.getHeuresSimples(24);

    expect(result).toBe("RRRR");
  });

  it("should return RROO when hour is 2", () => {
    const result = main.getHeuresSimples(2);

    expect(result).toBe("RROO");
  });
});
