export abstract class AbstractRenderer {
  public abstract showBall(host: HTMLElement): void;
  public abstract question(): void;
  public abstract hideAnswer(): void;
  public abstract showAnswer(answer: string, separator?: string): void;
}
