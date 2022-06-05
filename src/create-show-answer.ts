import { Answer } from './answer';
import { LINEBREAK_SYMBOL } from './line-brean-symbol';
import { AbstractRenderer } from './renderer/models/abstract-renderer';
import { ShowAnswerFunction } from './show-answer-function.model';

export function createShowAnswer(renderer: AbstractRenderer, answers: Answer[]): ShowAnswerFunction {
  return (event?: MouseEvent): void => {
    const { text: answer } = getRandomAnswer(answers);
    renderer.showAnswer({
      answer,
      event,
      lineSeparator: LINEBREAK_SYMBOL,
    });
  };
}

function getRandomAnswer(answers: Answer[]): Answer {
  const maxIndex = answers.length - 1;
  const index = Math.floor(Math.random() * Math.floor(maxIndex));
  return answers[index];
}
