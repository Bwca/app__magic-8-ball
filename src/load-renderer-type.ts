import { ParamKeys } from './param-keys.enum';
import { RendererType } from './renderer/models/renderer-type';

export function loadRendererType(): RendererType {
  const urlParams = new URLSearchParams(window.location.search);

  return <RendererType>urlParams.get(ParamKeys.RendererType) || 'THREE';
}
