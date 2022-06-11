import { Answer } from '../shared/models/answer.model';
import { RendererType } from '../shared/models/renderer-type';
import { DEFAULT_ANSWERS } from './default-answers.const';
import { ParamKeys } from './param-keys.enum';

export function obtainConfiguration(): Configuration {
  const params = new URLSearchParams(window.location.search);
  const answers = getAnswers(params);
  const color = params.get(ParamKeys.BallColor) || 'Navy';
  const rendererType = (params.get(ParamKeys.RendererType) || 'THREE') as RendererType;
  return {
    answers,
    color,
    rendererType,
  };
}

function getAnswers(params: URLSearchParams): Readonly<Answer[]> {
  if (!params.has(ParamKeys.Answers)) {
    return DEFAULT_ANSWERS;
  }

  try {
    const customAnswers = JSON.parse(params.get(ParamKeys.Answers) as string);
    history.replaceState('', '', '/');
    return customAnswers;
  } catch (e) {
    return DEFAULT_ANSWERS;
  }
}

interface Configuration {
  color: string;
  answers: Readonly<Answer[]>;
  rendererType: RendererType;
}
