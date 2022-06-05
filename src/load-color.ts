import { ParamKeys } from './param-keys.enum';

export function loadColor(): string {
  const urlParams = new URLSearchParams(window.location.search);

  return urlParams.get(ParamKeys.BallColor) || 'Navy';
}
