import { Answer } from './answer';
import { loadAnswers } from './load-answers';
import { initPwa } from './pwa-loader';
import { makeRenderer } from './renderer';

document.addEventListener('DOMContentLoaded', main);

function main(): void {
  initPwa();

  const answers = loadAnswers();
  const sceneRenderer = makeRenderer('THREE', 0x000000);
  sceneRenderer.showBall(document.body);

  document.addEventListener('click', (event) => {
    const { text: answer } = getRandomAnswer();
    sceneRenderer.showAnswer({
      answer,
      event,
      lineSeparator: '|',
    });
  });

  function getRandomAnswer(): Answer {
    const maxIndex = answers.length - 1;
    const index = Math.floor(Math.random() * Math.floor(maxIndex));
    return answers[index];
  }
}
