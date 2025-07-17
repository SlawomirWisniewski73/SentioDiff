#!/usr/bin/env node

import { SvgRenderer } from '../sentio-viz/src/SvgRenderer';
import { ThreeRenderer } from '../sentio-viz/src/ThreeRenderer';
import * as fs from 'fs';

const [mode, inputPath] = process.argv.slice(2);
if (!mode || !inputPath) {
  console.error('Usage: sentio-render <svg|three> <path_to_input.json>');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

if (mode === 'svg') {
  const renderer = new SvgRenderer();
  const svgContent = renderer.render(data);
  fs.writeFileSync('output.svg', svgContent);
  console.log('SVG rendering saved to output.svg');
} else if (mode === 'three') {
  const renderer = new ThreeRenderer();
  renderer.render(data);
  console.log('3D rendering completed (see console or graphical output)');
} else {
  console.error('Unknown mode. Use "svg" or "three".');
  process.exit(2);
}

