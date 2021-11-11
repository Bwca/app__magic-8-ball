import { Answer } from './answer/answer.model';
import { ANSWERS_PARAMS_KEY } from './answer/answers-params-key.const';
import { DEFAULT_ANSWERS } from './answer/default-answers.const';
import { initPwa } from './pwa-loader';
import { makeRenderer } from './renderer';

document.addEventListener('DOMContentLoaded', main);

function main(): void {
  initPwa();

  const answers = loadAnswers();
  const sceneRenderer = makeRenderer();
  sceneRenderer.showBall(document.body);

  document.addEventListener('click', getAnswerFromTheMagicBall);

  let timeout: number | null;
  let hideAnswerTImeout: number | null;

  function getAnswerFromTheMagicBall(): void {
    if (timeout || hideAnswerTImeout) {
      return;
    }
    sceneRenderer.question();
    timeout = setTimeout(() => {
      clearTimeout(timeout as number);
      timeout = null;
      const answer = getRandomAnswer();
      displayAnswer(answer);
    }, 2000);
  }

  function displayAnswer(answer: Answer): void {
    sceneRenderer.showAnswer(answer.text);
    hideAnswerTImeout = setTimeout(() => {
      clearTimeout(hideAnswerTImeout as number);
      hideAnswerTImeout = null;
      sceneRenderer.hideAnswer();
    }, 5000);
  }

  function getRandomAnswer(): Answer {
    const maxIndex = answers.length - 1;
    const index = Math.floor(Math.random() * Math.floor(maxIndex));
    return answers[index];
  }

  function loadAnswers(): Readonly<Answer[]> {
    const urlParams = new URLSearchParams(window.location.search);

    if (!urlParams.has(ANSWERS_PARAMS_KEY)) {
      return DEFAULT_ANSWERS;
    }

    try {
      const customAnswers = JSON.parse(urlParams.get(ANSWERS_PARAMS_KEY) as string);
      history.replaceState('', '', '/');
      return customAnswers;
    } catch (e) {
      return DEFAULT_ANSWERS;
    }
  }
}
