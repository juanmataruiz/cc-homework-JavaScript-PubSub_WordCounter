const PubSub = require('../helpers/pub_sub.js');

const InputView = function () {

};

InputView.prototype.bindEvent = function () {
  const input = document.querySelector('#wordcounter-form');
  input.addEventListener('submit', (event) => {
    const inputtedWord = event.target.text.value
    PubSub.publish('InputView:word-inputted', inputtedWord)
    event.preventDefault();
  })
};

module.exports = InputView;
