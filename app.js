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

  get5Hours(hour) {
    const count = Math.floor(hour / 5);
    return "R".repeat(count) + "O".repeat(4 - count);
  }

  getSeconds(second) {
    return second % 2 == 0 ? "R" : "O";
  }
}

module.exports = Main;
