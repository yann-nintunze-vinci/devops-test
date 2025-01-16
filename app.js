class Main {
  getMinutes(minute) {
    const count = minute % 5;
    return "J".repeat(count) + "O".repeat(4 - count);
  }

  get5Minutes(minute) {
    const count = Math.floor(minute / 5);
    return "J".repeat(count) + "O".repeat(11 - count);
  }

  getHours(hour) {
    const count = hour % 5;
    return "R".repeat(count) + "O".repeat(4 - count);
  }
}

module.exports = Main;
