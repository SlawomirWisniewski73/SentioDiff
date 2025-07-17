import Ajv from "ajv";
// PONIŻEJ POPRAWKA: Dodajemy 'assert { type: "json" }' na końcu importu
import schema from "../../sentio.schema.json" assert { type: "json" };
import { SentioData } from './types.js';

const ajv = new Ajv({ allErrors: true });
const validate = ajv.compile(schema);

export function validateSentio(doc: unknown): doc is SentioData {
  const valid = validate(doc);
  if (!valid) {
    console.error("Schema validation errors:", validate.errors);
    throw new Error("SentioDiff validation failed");
  }
  return true;
}
