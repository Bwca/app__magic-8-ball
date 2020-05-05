import { CanvasRenderer } from '../canvas-renderer/canvas-renderer';
import { HtmlRenderer } from '../html-renderer/html-renderer';
import { AbstractRenderer } from '../models/abstract-renderer';

export function makeRenderer(): AbstractRenderer {
  return makeHtmlRenderer();
}

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
