import * as fs from 'fs';
import { parse } from '../../sentio-core/src/index.js';

export function importCsv(filePath: string): any {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.trim().split('\n');
  // Prosty parser CSV: rozdział na komórki wg przecinków
  const dataRows = lines.map(line => line.split(',').map(val => val.trim()));
  // Konwersja CSV -> SentioData (podejście uproszczone)
  const tracks = dataRows.map((row, idx) => ({
    id: `row${idx}`,
    data: row.map(Number).filter(n => !isNaN(n))
  }));
  return parse({ tracks });
}
