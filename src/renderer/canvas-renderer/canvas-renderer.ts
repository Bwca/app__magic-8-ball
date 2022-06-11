export class CanvasRenderer {
  private canvas: HTMLCanvasElement;
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.fitCanvasToScreen();
    this.fillCanvas();
    window.addEventListener('resize', () => this.fitCanvasToScreen());
  }
  public showAnswer() {
    console.log('dispaying answer');
  }
  public showBall() {
    console.log('rendering view');
  }

  private fitCanvasToScreen(): void {
    this.canvas.setAttribute('height', String(window.innerHeight));
    this.canvas.setAttribute('width', String(window.innerWidth));
    this.fillCanvas();
  }

  private fillCanvas() {
    const ctx = this.canvas.getContext('2d');
    if (!ctx) {
      throw new Error('Error getting 2d context');
    }

    const vw = this.canvas.width / 100;

    const radius = 10 * vw;
    const x = this.canvas.width / 2 - radius;
    const y = this.canvas.height / 2 - radius;

    const circle = new Path2D();
    circle.moveTo(125, 35);
    circle.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill(circle);
  }
}
