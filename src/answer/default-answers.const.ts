import { AnswerTypes } from './answer-types.enum';
import { Answer } from './answer.model';

export const DEFAULT_ANSWERS: Readonly<Answer[]> = [
  {
    text: 'It is|certain.',
    type: AnswerTypes.Affirmative,
  },
  {
    text: 'It is|decidedly so.',
    type: AnswerTypes.Affirmative,
  },
  {
    text: 'Without|a doubt.',
    type: AnswerTypes.Affirmative,
  },
  {
    text: 'Yes | definitely.',
    type: AnswerTypes.Affirmative,
  },
  {
    text: 'You may|rely on it.',
    type: AnswerTypes.Affirmative,
  },
  {
    text: 'As I see|it, yes.',
    type: AnswerTypes.Affirmative,
  },
  {
    text: 'Most|likely.',
    type: AnswerTypes.Affirmative,
  },
  {
    text: 'Outlook|good.',
    type: AnswerTypes.Affirmative,
  },
  {
    text: 'Yes.',
    type: AnswerTypes.Affirmative,
  },
  {
    text: 'Signs point|to yes.',
    type: AnswerTypes.Affirmative,
  },
  {
    text: 'Reply hazy,|try again.',
    type: AnswerTypes.NonCommittal,
  },
  {
    text: 'Ask again|later.',
    type: AnswerTypes.NonCommittal,
  },
  {
    text: 'Better not|tell you now.',
    type: AnswerTypes.NonCommittal,
  },
  {
    text: 'Cannot|predict now.',
    type: AnswerTypes.NonCommittal,
  },
  {
    text: 'Concentrate and|ask again.',
    type: AnswerTypes.NonCommittal,
  },

  {
    text: "Don't count|on it.",
    type: AnswerTypes.Negative,
  },
  {
    text: 'My reply|is no.',
    type: AnswerTypes.Negative,
  },
  {
    text: 'My sources|say no.',
    type: AnswerTypes.Negative,
  },
  {
    text: 'Outlook not|so good.',
    type: AnswerTypes.Negative,
  },
  {
    text: 'Very doubtful.',
    type: AnswerTypes.Negative,
  },
];
