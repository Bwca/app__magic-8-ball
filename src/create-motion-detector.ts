import { ShowAnswerFunction } from './show-answer-function.model';

export function createMotionDetector(showAnswer: ShowAnswerFunction): (event: DeviceMotionEvent) => void {
  const current = { x: 0, y: 0 };
  let isMotionInProgress = false;

  return (event) => {
    const hasSignificantVerticalMovement = Math.abs(current.y - (event.accelerationIncludingGravity?.y ?? 0)) > 10;

    if (hasSignificantVerticalMovement && !isMotionInProgress) {
      current.x = event.accelerationIncludingGravity?.x ?? 0;
      current.y = event.accelerationIncludingGravity?.y ?? 0;
      isMotionInProgress = true;
    } else if (isMotionInProgress) {
      setTimeout(() => {
        showAnswer();
        isMotionInProgress = false;
      }, 2000);
    }
  };
}
