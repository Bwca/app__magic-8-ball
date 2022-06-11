import { LINEBREAK_SYMBOL } from '../../shared/constants/line-brean-symbol';
import { Answer } from '../../shared/models/answer.model';

const LINE_LIMIT = 10;

export function insertAnswerLineBreaks(answer: Answer): Answer {
  const { text } = answer;

  const words = text.split(/\s/);

  let textWithLineBreaks = '';
  let currentLine = '';
  for (const word of words) {
    const newLine = currentLine.concat(' ', word).trim();
    if (newLine.length < LINE_LIMIT) {
      currentLine = newLine;
      continue;
    }
    const lineToAdd = newLine.length === LINE_LIMIT ? newLine : currentLine;
    textWithLineBreaks = textWithLineBreaks.concat(lineToAdd, LINEBREAK_SYMBOL);
    currentLine = newLine.length === LINE_LIMIT ? '' : word;
  }

  if (currentLine) {
    textWithLineBreaks = textWithLineBreaks.concat(currentLine);
  }

  return { ...answer, text: textWithLineBreaks };
}
