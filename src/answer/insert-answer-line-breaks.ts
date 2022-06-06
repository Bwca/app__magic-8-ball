import { LINEBREAK_SYMBOL } from '../line-brean-symbol';
import { Answer } from './answer.model';

const lineLimit = 10;

export function insertAnswerLineBreaks(answer: Answer): Answer {
  const { text } = answer;

  const words = text.split(/\s/);

  let textWithLineBreaks = '';
  let currentLine = '';
  for (const word of words) {
    const newLine = currentLine.concat(' ', word).trim();
    if (newLine.length < lineLimit) {
      currentLine = newLine;
      continue;
    }
    const lineToAdd = newLine.length === lineLimit ? newLine : currentLine;
    textWithLineBreaks = textWithLineBreaks.concat(LINEBREAK_SYMBOL, lineToAdd);
    currentLine = newLine.length === lineLimit ? '' : word;
  }

  if (currentLine) {
    textWithLineBreaks = textWithLineBreaks.concat(LINEBREAK_SYMBOL, currentLine);
  }

  return { ...answer, text: textWithLineBreaks };
}
