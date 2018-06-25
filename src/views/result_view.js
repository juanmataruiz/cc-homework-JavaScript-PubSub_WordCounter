const PubSub = require('../helpers/pub_sub.js')

const ResultView = function () {

}

ResultView.prototype.bindEvent = function () {
  PubSub.subcribe('WordsChecker:result', (event) => {
    const result = event.detail;
    this.updateView(result);
  })

ResultView.prototype.updateView = function (result) {
  const resultElement = document.querySelector('#result');
  resultElement.textContent = `${result} words!`
  };

};

module.exports = ResultView;
