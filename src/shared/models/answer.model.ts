import { AnswerTypes } from '../enums/answer-types.enum';

export interface Answer {
  readonly type: AnswerTypes;
  text: string;
}
