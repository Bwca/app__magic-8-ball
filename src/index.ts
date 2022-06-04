import { Answer } from './answer';
import { loadAnswers } from './load-answers';
import { initPwa } from './pwa-loader';
import { makeRenderer } from './renderer';

document.addEventListener('DOMContentLoaded', main);

function main(): void {
  initPwa();

  const answers = loadAnswers();
  const sceneRenderer = makeRenderer();
  sceneRenderer.showBall(document.body);

  document.addEventListener('click', getAnswerFromTheMagicBall);

  function getAnswerFromTheMagicBall(): void {
    sceneRenderer.question();
    const answer = getRandomAnswer();
    sceneRenderer.showAnswer(answer.text, '|');
  }

  function getRandomAnswer(): Answer {
    const maxIndex = answers.length - 1;
    const index = Math.floor(Math.random() * Math.floor(maxIndex));
    return answers[index];
  }
}
