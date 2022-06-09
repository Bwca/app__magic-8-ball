import { LINEBREAK_SYMBOL } from '../shared/constants/line-brean-symbol';
import { AbstractRenderer } from '../renderer/models/abstract-renderer';
import { Answer } from '../shared/models/answer.model';

export function createShowAnswer(renderer: AbstractRenderer, answers: Answer[]): (event?: MouseEvent | undefined) => void {
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
