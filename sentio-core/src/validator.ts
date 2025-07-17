import Ajv from 'ajv';
import schema from '../../sentio.schema.json';
import { SentioData } from './types';

const ajv = new Ajv();
const validateFn = ajv.compile(schema);

export class Validator {
  validate(data: unknown): data is SentioData {
    const valid = validateFn(data);
    return !!valid;
  }
}
