const Main = require("../app.js");

describe("Berlin Clock", () => {
  const main = new Main();

  it("should return JJOO when minute is 22", () => {
    const result = main.getMinutes(22);

    expect(result).toBe("JJOO");
  });

  it("should return JJJO when minute is 33", () => {
    const result = main.getMinutes(33);

    expect(result).toBe("JJJO");
  });

  it("should return JJJJ when minute is 54", () => {
    const result = main.getMinutes(54);

    expect(result).toBe("JJJJ");
  });

  it("should return JJJJOOOOOOO when minute is 22", () => {
    const result = main.get5Minutes(22);

    expect(result).toBe("JJJJOOOOOOO");
  });

  it("should return RRRO when hour is 13", () => {
    const result = main.getHours(13);

    expect(result).toBe("RRRO");
  });

  it("should return RRRR when hour is 24", () => {
    const result = main.getHours(24);

    expect(result).toBe("RRRR");
  });

  it("should return RROO when hour is 2", () => {
    const result = main.getHours(2);

    expect(result).toBe("RROO");
  });

  it("should return RROO when hour is 11", () => {
    const result = main.get5Hours(11);

    expect(result).toBe("RROO");
  });

  it("should return RRRO when hour is 17", () => {
    const result = main.get5Hours(17);

    expect(result).toBe("RRRO");
  });

  it("should return RRRR when hour is 22", () => {
    const result = main.get5Hours(22);

    expect(result).toBe("RRRR");
  });

  it("should return R when hour is 20", () => {
    const result = main.getSeconds(20);

    expect(result).toBe("R");
  });
});
