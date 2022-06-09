import { ParamKeys } from './param-keys.enum';
import { RendererType } from '../renderer/models/renderer-type';
import { Answer } from '../shared/models/answer.model';
import { DEFAULT_ANSWERS } from './default-answers.const';

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
