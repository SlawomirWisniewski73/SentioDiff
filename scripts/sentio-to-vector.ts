#!/usr/bin/env node

import { toVector } from '../sentio-bridge/src/vectorDiffAdapter';
import * as fs from 'fs';

const [inputPath, outputPath] = process.argv.slice(2);
if (!inputPath) {
  console.error('Usage: sentio-to-vector <input.json> [output.txt]');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));
const vector = toVector(data);

if (outputPath) {
  fs.writeFileSync(outputPath, vector.join(','));
  console.log(`Vector saved to ${outputPath}`);
} else {
  console.log('Vector:', JSON.stringify(vector));
}

