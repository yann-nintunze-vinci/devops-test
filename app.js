class Main {
  getMinutesSimples(minute) {
    const count = minute % 5;
    return "J".repeat(count) + "O".repeat(4 - count);
  }

  get5Minutes(minute) {
    const count = Math.floor(minute / 5);
    return "J".repeat(count) + "O".repeat(11 - count);
  }
}

module.exports = Main;
