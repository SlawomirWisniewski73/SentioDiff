import Ajv from "ajv";
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// --- Ten fragment kodu jest potrzebny, aby poprawnie znaleźć ścieżkę w modułach ES ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// ---------------------------------------------------------------------------------

import { SentioData } from './types.js';

// Dynamiczne wczytywanie schematu JSON
const schemaPath = path.resolve(__dirname, '../../../sentio.schema.json');
const schemaData = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'));

const ajv = new Ajv({ allErrors: true });
// Kompilujemy schemat wczytany dynamicznie
const validate = ajv.compile(schemaData);

/**
 * Validates a SentioDiff document object against the JSON schema.
 * Throws an Error if validation fails.
 * @param doc The object to validate.
 * @returns True if the document is valid.
 */
export function validateSentio(doc: unknown): doc is SentioData {
  const valid = validate(doc);
  if (!valid) {
    console.error("Schema validation errors:", validate.errors);
    throw new Error("SentioDiff validation failed. See console for details.");
  }
  return true;
}
