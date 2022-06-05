import { createMotionDetector } from './create-motion-detector';
import { createShowAnswer } from './create-show-answer';
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

  const showAnswer = createShowAnswer(sceneRenderer, [...answers]);
  const showAnswerOnShake = createMotionDetector(showAnswer);

  document.addEventListener('click', showAnswer);
  window.addEventListener('devicemotion', showAnswerOnShake);
}
