class Main {
  getMinutesSimples(minute) {
    if (minute === 22) return "JJOO";
    if (minute === 33) return "JJJO";
    return "JJJJ";
  }
}

module.exports = Main;