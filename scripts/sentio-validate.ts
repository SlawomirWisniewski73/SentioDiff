#!/usr/bin/env node

import { Validator } from '../sentio-core/src/validator';
import * as fs from 'fs';

const [inputPath] = process.argv.slice(2);
if (!inputPath) {
  console.error('Usage: sentio-validate <path_to_json_file>');
  process.exit(1);
}

try {
  const fileContent = fs.readFileSync(inputPath, 'utf-8');
  const data = JSON.parse(fileContent);
  const validator = new Validator();
  const valid = validator.validate(data);
  if (valid) {
    console.log('File is valid according to schema.');
  } else {
    console.error('Validation failed: data does not match schema.');
    process.exit(2);
  }
} catch (err) {
  console.error('Error reading or validating file:', err);
  process.exit(3);
}

