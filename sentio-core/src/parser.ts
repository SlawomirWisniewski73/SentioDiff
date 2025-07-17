import { SentioDoc } from "./types";

export function parseSentio(json: any): SentioData {
  if (!json.version || !json.entities) {
    throw new Error("Invalid SentioDiff document: missing required fields.");
  }
  return json as SentioData;
}
