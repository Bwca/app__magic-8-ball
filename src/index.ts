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

  let timeout: NodeJS.Timeout | null;
  let hideAnswerTImeout: NodeJS.Timeout | null;

  function getAnswerFromTheMagicBall(): void {
    if (timeout || hideAnswerTImeout) {
      return;
    }
    sceneRenderer.question();
    timeout = setTimeout(() => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = null;
      const answer = getRandomAnswer();
      displayAnswer(answer);
    }, 2000);
  }

  function displayAnswer(answer: Answer): void {
    sceneRenderer.showAnswer(answer.text);
    hideAnswerTImeout = setTimeout(() => {
      if (hideAnswerTImeout) {
        clearTimeout(hideAnswerTImeout);
      }
      hideAnswerTImeout = null;
      sceneRenderer.hideAnswer();
    }, 5000);
  }

  function getRandomAnswer(): Answer {
    const maxIndex = answers.length - 1;
    const index = Math.floor(Math.random() * Math.floor(maxIndex));
    return answers[index];
  }
}
