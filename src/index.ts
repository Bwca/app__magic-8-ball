import { Answer } from './answer';
import { LINEBREAK_SYMBOL } from './line-brean-symbol';
import { loadAnswers } from './load-answers';
import { loadColor } from './load-color';
import { loadRendererType } from './load-renderer-type';
import { initPwa } from './pwa-loader';
import { makeRenderer } from './renderer';

document.addEventListener('DOMContentLoaded', main);

function main(): void {
  initPwa();

  const answers = loadAnswers();
  const color = loadColor();
  const rendererType = loadRendererType();
  const sceneRenderer = makeRenderer(rendererType, color);
  sceneRenderer.showBall(document.body);

  document.addEventListener('click', (event) => {
    const { text: answer } = getRandomAnswer();
    sceneRenderer.showAnswer({
      answer,
      event,
      lineSeparator: LINEBREAK_SYMBOL,
    });
  });

  function getRandomAnswer(): Answer {
    const maxIndex = answers.length - 1;
    const index = Math.floor(Math.random() * Math.floor(maxIndex));
    return answers[index];
  }
}
