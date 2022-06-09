import { obtainConfiguration } from './configuration';
import { createMotionDetector } from './create-motion-detector.function';
import { createShowAnswer } from './create-show-answer';
import { initPwa } from './init-pwa/init-pwa.function';
import { makeRenderer } from './renderer';

document.addEventListener('DOMContentLoaded', main);

function main(): void {
  initPwa();
  const { answers, color, rendererType } = obtainConfiguration();

  const sceneRenderer = makeRenderer(rendererType, color);
  sceneRenderer.showBall(document.body);

  const showAnswer = createShowAnswer(sceneRenderer, [...answers]);
  const showAnswerOnShake = createMotionDetector(() => sceneRenderer.hideAnswer(), showAnswer);

  document.addEventListener('click', showAnswer);
  window.addEventListener('devicemotion', showAnswerOnShake);
}
