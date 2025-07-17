import { SentioData } from './types';

export function parse(json: unknown): SentioData {
  if (!json.version || !json.entities) {
    throw new Error("Invalid SentioDiff document: missing required fields.");
  }
  return json as SentioData;
}
