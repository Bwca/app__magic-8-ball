import { AbstractRenderer } from '../models/abstract-renderer';

export class HtmlRenderer implements AbstractRenderer {
  public ball!: HTMLElement;
  private answerContainer!: HTMLElement;
  private answer!: HTMLElement;

  public question(): void {
    this.answerContainer.classList.remove('is-visible');
  }

  public showAnswer(str: string) {
    this.answer.textContent = str;
    this.answerContainer.classList.add('is-visible');
  }
  public showBall() {
    const canvas = document.createElement('section');
    canvas.className = 'canvas';

    const ballContainer = document.createElement('div');
    ballContainer.className = 'ball-8-container';

    const ball = document.createElement('article');
    ball.className = 'ball';
    this.ball = ball;

    const shadow = document.createElement('div');
    shadow.className = 'shadow';

    const answerPortal = document.createElement('div');
    answerPortal.className = 'answer-portal';

    const answerContainer = document.createElement('div');
    answerContainer.className = 'answer-container';
    this.answerContainer = answerContainer;

    const answer = document.createElement('div');
    answer.className = 'answer';
    this.answer = answer;

    answerContainer.appendChild(answer);
    answerPortal.appendChild(answerContainer);

    ball.appendChild(answerPortal);
    ballContainer.appendChild(ball);
    ballContainer.appendChild(shadow);

    canvas.appendChild(ballContainer);

    document.body.appendChild(canvas);
  }
}
