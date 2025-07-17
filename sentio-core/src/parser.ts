// Poprawiony i bezpieczny kod dla sentio-core/src/parser.ts
import { SentioData } from './types.js';

export function parse(input: unknown): SentioData {
  // Krok 1: Sprawdzamy, czy input jest w ogóle obiektem
  if (typeof input !== 'object' || input === null) {
    throw new Error('Invalid input: not an object.');
  }

  // Krok 2: Używamy type assertion, zakładając, że walidacja JSON Schema
  // została (lub zostanie) wykonana na zewnątrz.
  // To daje nam dostęp do właściwości.
  const data = input as Partial<SentioData>;

  // Krok 3: Sprawdzamy istnienie wymaganego pola 'tracks'
  if (!data.tracks) {
    throw new Error("Invalid SentioDiff data: missing 'tracks' field.");
  }

  // Zwracamy obiekt, który teraz jest traktowany jako SentioData
  return data as SentioData;
}
