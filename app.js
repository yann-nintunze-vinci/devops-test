class Main {
  constructor() {
    setInterval(() => {
      const date = new Date();
      const minutes = date.getMinutes();
      const hours = date.getHours();
      console.log(`
        ${this.getSeconds(date.getSeconds())}
        ${this.get5Hours(hours)}
        ${this.getHours(hours)}
        ${this.get5Minutes(minutes)}
        ${this.getMinutes(minutes)}
      `);
    }, 1000);
  }
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

function startClock() {
  new Main();
}

startClock();

module.exports = Main;
