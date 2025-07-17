import Ajv from "ajv";
import schema from "../../sentio.schema.json";

const ajv = new Ajv({ allErrors: true });
const validate = ajv.compile(schema);

export function validateSentio(doc: any): boolean {
  const valid = validate(doc);
  if (!valid) {
    console.error(validate.errors);
    throw new Error("SentioDiff validation failed");
  }
  return true;
}
