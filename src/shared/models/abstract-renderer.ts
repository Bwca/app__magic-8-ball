import { AnswerPayload } from './answer-payload';

export abstract class AbstractRenderer {
  public abstract showBall(host: HTMLElement): void;
  public abstract showAnswer(answerPayload: AnswerPayload): void;
  public abstract hideAnswer(): void;
}
