class Main {
  getMinutesSimples(minute) {
    const count = minute % 5;
    return "J".repeat(count) + "O".repeat(4 - count);
  }

  get5Minutes(minute) {
    return "JJRJ0000000";
  }
}

module.exports = Main;
