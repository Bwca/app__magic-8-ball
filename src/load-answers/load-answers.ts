import { Answer, ANSWERS_PARAMS_KEY, DEFAULT_ANSWERS } from '../answer';

export function loadAnswers(): Readonly<Answer[]> {
  const urlParams = new URLSearchParams(window.location.search);

  if (!urlParams.has(ANSWERS_PARAMS_KEY)) {
    return DEFAULT_ANSWERS;
  }

  try {
    const customAnswers = JSON.parse(urlParams.get(ANSWERS_PARAMS_KEY) as string);
    history.replaceState('', '', '/');
    return customAnswers;
  } catch (e) {
    return DEFAULT_ANSWERS;
  }
}
