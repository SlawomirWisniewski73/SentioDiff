#!/usr/bin/env node

// Zmieniamy import - zamiast klasy 'Validator', importujemy funkcję 'validateSentio'
import { validateSentio } from '../sentio-core/src/validator.js'; 
import * as fs from 'fs';

const [inputPath] = process.argv.slice(2);
if (!inputPath) {
  console.error('Usage: sentio-validate <path_to_json_file>');
  process.exit(1);
}

try {
  const fileContent = fs.readFileSync(inputPath, 'utf-8');
  const data = JSON.parse(fileContent);

  // Bezpośrednio wywołujemy funkcję walidującą
  validateSentio(data);

  // Jeśli funkcja nie rzuci błędu, to znaczy, że walidacja się powiodła
  console.log(`✅ File ${inputPath} is valid according to the schema.`);

} catch (err) {
  // Błąd zostanie złapany, jeśli walidacja się nie powiedzie lub plik jest nieprawidłowy
  console.error(`❌ Error validating file ${inputPath}:`, (err as Error).message);
  process.exit(1);
}
