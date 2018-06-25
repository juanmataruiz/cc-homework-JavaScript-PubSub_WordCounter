const PubSub = require('../helpers/pub_sub.js');

const WordsChecker = function () {

}

WordsChecker.prototype.bindEvent = function () {
  PubSub.subcribe('InputView:word-inputted', (event) => {
    const inputtedWord = event.detail;
    const result = this.wordsAreCounted(inputtedWord);
    PubSub.publish('WordsChecker:result', result)
  })

  WordsChecker.prototype.wordsAreCounted = function (string) {
    return string.split(" ").length;
  };

};

module.exports = WordsChecker;
