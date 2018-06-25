const InputView = require('./views/input_view.js');
const WordsChecker = require('./models/words_checker.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const inputView = new InputView();
  inputView.bindEvent();

  const wordsChecker = new WordsChecker();
  wordsChecker.bindEvent();

  const resultView = new ResultView();
  resultView.bindEvent();

});
