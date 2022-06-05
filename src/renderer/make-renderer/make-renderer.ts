import { THREEBall8Renderer } from 'fork-magic-8-ball';

import { CanvasRenderer } from '../canvas-renderer/canvas-renderer';
import { HtmlRenderer } from '../html-renderer/html-renderer';
import { AbstractRenderer } from '../models/abstract-renderer';
import { RendererType } from '../models/renderer-type';

export function makeRenderer(type: RendererType, ballColor: string | number): AbstractRenderer {
  switch (type) {
    case 'HTML':
      return makeHtmlRenderer();
   /*  case 'THREE':
      return makeTHREERenderer(ballColor); */
    default:
      throw new Error('No renderer type specified!');
  }
}

/** TODO: implement canvas renderer */
function makeCanvasRenderer(): CanvasRenderer {
  const canvas = document.querySelector('canvas');
  if (!canvas) {
    throw new Error('NO CANVAS FOUND');
  }
  return new CanvasRenderer(canvas);
}

function makeHtmlRenderer(): HtmlRenderer {
  return new HtmlRenderer();
}

function makeTHREERenderer(ballColor: string | number): THREEBall8Renderer {
  return new THREEBall8Renderer(ballColor);
}
