class Main {
  getMinutesSimples(minute) {
    const count = minute % 5;
    return 'J'.repeat(count) + 'O'.repeat(4 - count);
  }
}

module.exports = Main;
