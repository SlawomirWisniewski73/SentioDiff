import Ajv from 'ajv';
// PONIŻEJ ZMIANA: Używamy ścieżki względnej, aby wskazać plik index w module core.
// Dodajemy też rozszerzenie .js, co jest dobrą praktyką w modułach ES.
import { SelfModelEntity } from '../../sentio-core/src/index.js';

const selfModelSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
    description: { type: "string", nullable: true },
    children: {
      type: "array",
      items: { $ref: "#/$defs/SelfModelEntity" },
      nullable: true
    }
  },
  required: ["id", "name"],
  $defs: {
    SelfModelEntity: {
      type: "object",
      properties: {
        id: { type: "string" },
        name: { type: "string" },
        description: { type: "string", nullable: true },
        children: {
          type: "array",
          items: { $ref: "#/$defs/SelfModelEntity" },
          nullable: true
        }
      },
      required: ["id", "name"],
      additionalProperties: false
    }
  },
  additionalProperties: false
};

const ajv = new Ajv();
const validate = ajv.compile(selfModelSchema);

/**
 * Validates a SelfModelEntity object against the schema.
 * Throws an Error if validation fails.
 */
export function validateSelfModel(model: SelfModelEntity): boolean {
  if (!validate(model)) {
    const errorText = validate.errors ? ajv.errorsText(validate.errors) : "Unknown error";
    throw new Error("SelfModelEntity validation failed: " + errorText);
  }
  return true;
}
